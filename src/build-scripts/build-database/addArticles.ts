import fs from 'fs';
import yaml from 'yaml';

import {
  fromDocumentsRoot,
  stripFileExtensions,
  buildPathToRelatedItem
} from '../filePathHelpers';

import { Article, Video, Collection } from '../../models';

import { ParsedArticle } from '../../types/ParsedArticle';

const addArticles = async (articles: ParsedArticle[]) => {
  // first, save all articles to db
  const savedResults: Array<{ parsedArticle: ParsedArticle, articleInstance: Article }> = [];

  for (const article of articles) {
    const articleModelInstance = await createArticle(article);
    savedResults.push({
      parsedArticle: article,
      articleInstance: articleModelInstance
    });
  }

  // then iterate over the saved articles to establish relationships between them
  for (let { parsedArticle, articleInstance } of savedResults) {
    const { related_articles } = parsedArticle;
    if (!related_articles) {
      continue;
    }

    for (let relation of related_articles) {
      let searchKey: string, searchValue: string;
      if ('slug' in relation) {
        searchKey = 'slug';
        searchValue = relation.slug;
      } else {
        searchKey = 'path';
        searchValue = stripFileExtensions(buildPathToRelatedItem({
          sourceFilePath: parsedArticle.filePath,
          relation
        }));
      }
      const relatedArticle = await Article.findOne({ where: { [searchKey]: searchValue } });
      articleInstance.addRelatedArticle(relatedArticle);
    }
  }
};

const createArticle = async (article: ParsedArticle) => {
  const newArticle = await Article.create({
    title: article.title || 'empty title',
    description: article.description || 'empty description',
    path: article.path,
    file_path: article.filePath,
    slug: article.slug,
    body: article.html
  });

  if (article.related_videos) {
    const videoPaths = article.related_videos.map(relation => buildPathToRelatedItem({
      sourceFilePath: article.filePath,
      relation,
      returnAbsolutePath: true
    }));

    for (const videoPath of videoPaths) {
      const fromDocsPath = stripFileExtensions(fromDocumentsRoot(videoPath));
      const savedVideo = await Video.findOne({ where: { file_path: fromDocsPath } });
      if (savedVideo) {
        continue;
      }
      const fileContent = fs.readFileSync(videoPath, 'utf-8');
      const parsedVideo = yaml.parse(fileContent);

      const video = await Video.create({
        title: parsedVideo.title,
        description: parsedVideo.description,
        youtube_id: parsedVideo.youtube_id,
        file_path: fromDocsPath
      });

      await newArticle.addVideo(video);
    }
  }

  const collectionName = article.path.split('/').shift();
  const collection = await getCollection(collectionName);
  collection.addArticle(newArticle);

  await Article.sync();

  return newArticle;
};


const getCollection = async (name: string) => {
  const savedCollection = await Collection.findOne({ where: { name } });
  if (savedCollection) {
    return savedCollection;
  } else {
    const collection = await Collection.create({ name });
    return collection;
  }
};

export default addArticles;
