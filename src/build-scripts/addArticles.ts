import fs from 'fs';
import yaml from 'yaml';

import {
  fromDocumentsRoot,
  stripFileExtensions,
  buildPathToRelatedItem
} from './filePathHelpers';

import { Article, Video, Collection } from '../models';

import { ParsedArticle } from 'src/types/ParsedArticle';
import { search } from 'src/controllers/searchController';

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
      console.log('relatedArticle', relatedArticle);
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
        url: parsedVideo.url,
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

// const insertArticle = async (db, fileData) => {
//   const { path, filePath, slug, html, ...otherFields } = fileData;
//   const sql = `INSERT INTO articles(path, file_path, slug, body, data) VALUES (:path, :filePath, :slug, :body, :data)`;
//   const result = await db.run(sql, {
//     ':path': path,
//     ':filePath': filePath,
//     ':slug': slug,
//     ':body': html,
//     ':data': JSON.stringify(otherFields)
//   });
//   return result.lastID;
// };

// const associateArticleWithVideo = async (params) => {
//   const { db, savedArticleId, articlePath, videoRelation } = params;
//   const videoRelationPath = buildPathToRelatedItem({
//     sourceFilePath: articlePath,
//     relation: videoRelation
//   });
//   let { id: videoId } = await db.get(`SELECT id FROM videos WHERE file_path = "${videoRelationPath}"`) || {};
//   if (! videoId) {
//     const video = readVideo(videoRelationPath);
//     videoId = await insertVideo(db, Object.assign(video, { filePath: videoRelationPath }));
//   }

//   const sql = 'INSERT INTO articles_videos(article_id, video_id) VALUES (:articleId, :videoId)';
//   await db.run(sql, {
//     ':articleId': savedArticleId,
//     ':videoId': videoId
//   });
// };

// const readVideo = (videoPath) => {
//   const videoFileContent = fs.readFileSync(path.join(config.docsPath, videoPath), 'utf-8');
//   return yaml.parse(videoFileContent);
// };

// const insertVideo = async (db, video) => {
//   const { filePath, title, description, url, ...otherFields } = video;

//   const sql = 'INSERT INTO videos(file_path, title, description, url, data) VALUES (:filePath, :title, :description, :url, :data)';
//   const { lastID: id } = await db.run(sql, {
//     ':filePath': filePath,
//     ':title': title,
//     ':description': description,
//     ':url': url,
//     ':data': JSON.stringify(otherFields)
//   });

//   return id;
// };

export default addArticles;
