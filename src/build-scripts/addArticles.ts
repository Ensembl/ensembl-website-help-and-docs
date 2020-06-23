import fs from 'fs';
import yaml from 'yaml';

import {
  fromDocumentsRoot,
  stripFileExtensions,
  buildPathToRelatedItem
} from './filePathHelpers';

import { Article, Video } from '../models';

import { ParsedArticle } from 'src/types/ParsedArticle';

const addArticles = async (articles: ParsedArticle[]) => {
  for (let article of articles) {
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

    Article.sync();
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
