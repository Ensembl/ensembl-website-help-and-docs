import fs from 'fs';
import path from 'path';
import globby from 'globby';
import yaml from 'yaml';
import pickBy from 'lodash/pickBy';
import uniqBy from 'lodash/uniqBy';

import config from '../../../config';
import { pathToMenuNameMap } from './menuNameToPathMap';

import parseMarkdown from './parseMarkdown';
import {
  slugifyPath,
  fromDocumentsRoot
 } from '../filePathHelpers';
 import { buildPageUrl } from './buildPageUrl';

import { ParsedMenuItem } from './build-menus/buildMenus';

const fsPromises = fs.promises;

type ReadSourceFilesParams = {
  name: string,
  data: ParsedMenuItem[]
}[];

type ArticleType =
  | 'article'
  | 'video';

type ArticleMetadata = {
  path: string; // full absolute file to path
  type: ArticleType;
  url?: string; // should this be an optional or nullable field?
  collection?: string;
};

const readSourceFiles = async (menus: ReadSourceFilesParams) => {
  const articlesInMenus = menus.flatMap(menu => getAllArticlesFromMenu(menu.name, menu.data));
  verifyUrlUniqueness(articlesInMenus);

  let articlesMetadata = uniqBy(articlesInMenus, 'path'); // allow for the possibility that an article is referenced several times in the menu
  const remainingArticlesMetadata = await getRemainingArticlesMetadata(articlesMetadata);
  articlesMetadata = [...articlesMetadata, ...remainingArticlesMetadata];

  // iterate through the articles sequentially
  const articlesIterator = createArticlesIterator(articlesMetadata);
  const articles = [];
  for await (const article of articlesIterator) {
    articles.push(article);
  }

  return articles.map(article => {
    const articlePath = article.path;
    
    return {
      ...article,
      slug: article.slug || slugifyPath(fromDocumentsRoot(articlePath)),
      url: article.url || buildUrlForArticleWithoutMenu(article)
    }
  });
};

// discard menu elements that do not have articles associated with them
const getAllArticlesFromMenu = (collectionName: string, menuItems: ParsedMenuItem[]) => {
  let list: ArticleMetadata[] = [];
  for (const item of menuItems) {
    const articleType = item.type === 'collection' ? 'article' : item.type;
    if (item.path) {
      const articleMetadata = {
        path: item.path,
        type: articleType,
        url: item.url,
        collection: collectionName
      }
      list.push(articleMetadata)
    }
    if (item.items) {
      list = [...list, ...getAllArticlesFromMenu(collectionName, item.items)]
    }
  }

  return list;
};

// Question: should this be a requirement?
// I.e. do we make sure that a single article never is referred to by more than 1 url?
const verifyUrlUniqueness = (articleMetadata: ArticleMetadata[]) => {
  const tracker: Record<string, string> = {};
  for (const item of articleMetadata) {
    const { path, url } = item;
    if (!tracker[path]) {
      tracker[path] = url;
    } else if (tracker[path] === url) {
      continue;
    } else {
      console.log({ tracker, path, url });
      throw new Error(`Article ${path} is referenced by more than one url`);
    }
  }
};

// this function should add articles that are not listed in the menus
const getRemainingArticlesMetadata = async (existingArticles: ArticleMetadata[]) => {
  const { docsPath } = config;
  const filePatterns = [
    `${docsPath}/**/*.md`,
    `${docsPath}/**/*.yml`,
    `!${docsPath}/**/toc.yml`,
  ];
  const allFilePaths = await globby(filePatterns);

  const usedPaths = new Set(existingArticles.map(({ path }) => path));
  const newPaths = allFilePaths.filter(path => !usedPaths.has(path));
  const newArticleMedadata: ArticleMetadata[] = newPaths.map(filePath => ({
    path: filePath,
    type: 'article' // for video articles this will be updated when the yml files get read and parsed
  }));

  return newArticleMedadata;
};

const createArticlesIterator = async function*(articleMetadata: ArticleMetadata[]) {
  for (const item of articleMetadata) {
    const filePath = item.path;
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    let parsedFileContent;
    if (isMarkdownFile(filePath)) {
      parsedFileContent = await parseMarkdown(filePath);
      parsedFileContent = {
        ...parsedFileContent,
        ...item
      };
    } else if (isYamlFile(filePath)) {
      parsedFileContent = yaml.parse(fileContent);
      const metadata = pickBy(item, (_, key) => key !== 'type');
      parsedFileContent = {
        ...parsedFileContent, // it will contain the actual type of the data stored in the yml file
        ...metadata
      };
    }
    yield parsedFileContent;
  }
};

const buildUrlForArticleWithoutMenu = (article: { path: string, type: string, title: string }) => {
  const fromDocumentsRootPath = fromDocumentsRoot(article.path);
  const dirName = path
    .parse(fromDocumentsRootPath)
    .dir
    .split(path.sep)
    .filter(Boolean)
    .shift();
  const urlNamespace = pathToMenuNameMap.get(dirName);

  if (!urlNamespace) {
    throw new Error(`Could not create url for file ${article.path}`);
  }

  return buildPageUrl(article.title, article.type, `/${urlNamespace}`);
};

const isMarkdownFile = (filePath: string) => path.parse(filePath).ext === '.md';

const isYamlFile = (filePath: string) => path.parse(filePath).ext === '.yml';

export default readSourceFiles;
