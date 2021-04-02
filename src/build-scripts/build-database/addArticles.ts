import path from 'path';

import {
  fromDocumentsRoot
} from '../filePathHelpers';

import { Article, Collection } from '../../models';
import { TextArticle } from '../../models/Article';

import { ParsedArticle } from '../../types/ParsedArticle';
import { ParsedVideo } from '../../types/ParsedVideo';

type ParsedFile = ParsedArticle | ParsedVideo;

const addArticles = async (items: ParsedFile[]) => {
  let savedArticles: { parsedFile: ParsedFile, savedArticle: Article }[] = [];
  for (const item of items) {
    savedArticles.push({
      parsedFile: item,
      savedArticle: await saveArticle(item)
    });
  }
  for (const item of savedArticles) {
    await addRelationships(item);
  }
};

const saveArticle = async (article: ParsedArticle | ParsedVideo) => {
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

const prepareArticleMetadata = (article: ParsedArticle | ParsedVideo) => {
  if (article.type === 'video') {
    return { youtube_id: article.youtube_id };
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

  if (parsedFile.related_articles) {
    for (const { href } of parsedFile.related_articles) {
      const pathToRelatedArticle = buildPathToRelatedFile(savedArticle.filePath, href);
      const relatedArticle = await Article.findOne({ where: { filePath: pathToRelatedArticle } });

      if (!relatedArticle) {
        console.log('Incorrect path for related article provided:', pathToRelatedArticle);
        continue;
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

const buildPathToRelatedFile = (sourceFilePath: string, relatedFilePath: string) => {
  const { dir: sourceFileDirectory } = path.parse(sourceFilePath);
  return path.join(sourceFileDirectory, relatedFilePath);
};

export default addArticles;
