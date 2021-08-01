import path from 'path';
import pick from 'lodash/pick';

import {
  fromDocumentsRoot
} from '../filePathHelpers';

import { Article, Collection } from '../../models';
import { IndexArticle, TextArticle } from '../../models/Article';

import { ParsedIndexPage } from '../../types/ParsedIndexPage';
import { ParsedArticle } from '../../types/ParsedArticle';
import { ParsedVideo } from '../../types/ParsedVideo';

type ParsedFile = ParsedIndexPage| ParsedArticle | ParsedVideo;

const addArticles = async (items: ParsedFile[]) => {
  let savedArticles: { parsedFile: ParsedFile, savedArticle: Article }[] = [];
  for (const item of items) {
    savedArticles.push({
      parsedFile: item,
      savedArticle: await saveArticle(item)
    });
  }
  // now that all articles have been saved to the database,
  // it's time to establish relationships between them
  for (const item of savedArticles) {
    if (item.parsedFile.type === 'index') {
      await addLinksToIndexArticles(item.savedArticle as IndexArticle);
    } else {
      await addRelationships(item);
    }
  }
};

const saveArticle = async (article: ParsedFile) => {
  const newArticle = Article.create({
    title: article.title || 'empty title',
    type: article.type,
    description: article.description || 'empty description',
    slug: article.slug,
    url: article.url,
    filePath: fromDocumentsRoot(article.path),
    data: prepareArticleMetadata(article),
    body: article.type === 'article' ? article.html : undefined
  });

  await Article.save(newArticle);

  if (article.collection) {
    await addArticleToCollection(newArticle, article.collection);
  }

  return newArticle;
};

const prepareArticleMetadata = (article: ParsedFile) => {
  if (article.type === 'video') {
    return { youtube_id: article.youtube_id };
  } else if (article.type === 'index') {
    return {
      items: article.items.map(item => ({
        ...pick(item, ['title', 'summary']),
        url: item.href
      }))
    };
  }
}

const addArticleToCollection = async (article: Article, collectionName: string) => {
  let collection = await Collection.findOne({ where: { name: collectionName } });
  if (!collection) {
    collection = Collection.create({
      name: collectionName,
      articles: []
    });
  }
  collection.articles.push(article);
  await Collection.save(collection);
};


const addRelationships = async (item: { parsedFile: ParsedFile, savedArticle: Article }) => {
  const { parsedFile, savedArticle } = item;
  if (parsedFile.type === 'video') {
    // FIXME: videos can also have related articles
    return;
  }

  if ('related_articles' in parsedFile) {
    for (const { href } of parsedFile.related_articles) {
      const pathToRelatedArticle = buildPathToRelatedFile(savedArticle.filePath, href);
      const relatedArticle = await Article.findOne({ where: { filePath: pathToRelatedArticle } });

      if (!relatedArticle) {
        const errorMessage = `Incorrect path for related article provided in ${savedArticle.filePath}: ${pathToRelatedArticle}`;
        throw new Error(errorMessage);
      }

      if (!savedArticle.data) {
        savedArticle.data = { relatedArticles: [] };
      } else if (!(savedArticle as TextArticle).data.relatedArticles) {
        (savedArticle as TextArticle).data.relatedArticles = [];
      }

      (savedArticle as TextArticle).data.relatedArticles.push(relatedArticle.id);
    }
  }

  await savedArticle.save();
};

const addLinksToIndexArticles = async (indexArticle: IndexArticle) => {
  const filePath = indexArticle.filePath;
  const indexItems = indexArticle.data.items;
  for (const indexItem of indexItems) {
    // At this point, the url field of an index item of the saved article
    // contains the relative path to the file that the index article is referencing.
    // Here, we will overwrite this field with the actual url.
    // TODO: should probably first check that the href is not a url to an external article
    const pathToLinkedArticle = buildPathToRelatedFile(filePath, indexItem.url);
    const savedLinkedArticle = await Article.findOne({ where: { filePath: pathToLinkedArticle } });

    if (!savedLinkedArticle) {
      console.log('Incorrect path for related article provided:', pathToLinkedArticle);
      continue;
    }

    indexItem.url = savedLinkedArticle.url;
  }

  await indexArticle.save();
};

const buildPathToRelatedFile = (sourceFilePath: string, relatedFilePath: string) => {
  const { dir: sourceFileDirectory } = path.parse(sourceFilePath);
  return path.join(sourceFileDirectory, relatedFilePath);
};

export default addArticles;
