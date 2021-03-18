import unified from 'unified';
import parse from 'rehype-parse';
import stringify from 'rehype-stringify';
import visit from 'unist-util-visit';
import { Node } from 'unist';
import path from 'path';

import { Article } from '../../../models';

type Params = {
  article: Article,
  allArticles: Article[]
};

export const setInternalLinks = async () => {
  const allArticles = await Article.find();

  for (const article of allArticles) {
    if (article.body) {
      article.body = await(parseHtml({ article, allArticles }));
      await article.save();
    }
  }
};

const parseHtml = async (params: Params) => {
  const html = params.article.body;

  const processedFile = await
    unified()
      .use(parse)
      .use(linksPlugin(params))
      .use(stringify)
      .process(html);

  return processedFile.contents as string;
};


const linksPlugin = (params: Params) => () => {
  
  const transformer = (tree: Node) => {
    visit(tree, { tagName : 'a' }, linkVisitor(params));
  };

  return transformer;
};

type LinkVisitorParam = Node & {
  properties: {
    href: string;
    rel?: string;
    target?: string;
  }
};
const linkVisitor = (params: Params) => (node: LinkVisitorParam) => {
  const { article, allArticles } = params;
  let { properties: { href } } = node;

  try {
    new URL(href); // if the href is a full-formed url, assume that it's to an external source
    node.properties.rel = 'nofollow';
    node.properties.target = "_blank";
  } catch {
    // href is not a proper url; treat it as path
    const pathToLinkedResource = path.join(article.filePath, href);
    const linkedArticle = allArticles.find(article => article.filePath === pathToLinkedResource);
    // TODO?: should the build break if the linked article can't be found? which means the link is likely broken
    if (linkedArticle) {
      node.properties.href = linkedArticle.url;
    }
  }
};
