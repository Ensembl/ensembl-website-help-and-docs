const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const config = require('../../config');
// const { addArticleTags } = require('./addTags');
const { buildPathToRelatedItem } = require('./filePathHelpers');

const addArticles = async (db, articles) => {
  for (let article of articles) {
    const savedArticleId = await insertArticle(db, article);
    if (article.related_videos) {
      for (video of article.related_videos) {
        await associateArticleWithVideo({
          db,
          savedArticleId,
          articlePath: article.filePath,
          videoRelation: video
        });
      }
    }
    // await addArticleTags(db, article);
  }
  // await addArticleRelationships(db);
};

const insertArticle = async (db, fileData) => {
  const { path, filePath, slug, html, ...otherFields } = fileData;
  const sql = `INSERT INTO articles(path, file_path, slug, body, data) VALUES (:path, :filePath, :slug, :body, :data)`;
  const result = await db.run(sql, {
    ':path': path,
    ':filePath': filePath,
    ':slug': slug,
    ':body': html,
    ':data': JSON.stringify(otherFields)
  });
  return result.lastID;
};

const associateArticleWithVideo = async (params) => {
  const { db, savedArticleId, articlePath, videoRelation } = params;
  const videoRelationPath = buildPathToRelatedItem({
    sourceFilePath: articlePath,
    relation: videoRelation
  });
  let { id: videoId } = await db.get(`SELECT id FROM videos WHERE file_path = "${videoRelationPath}"`) || {};
  if (! videoId) {
    const video = readVideo(videoRelationPath);
    videoId = await insertVideo(db, Object.assign(video, { filePath: videoRelationPath }));
  }

  const sql = 'INSERT INTO articles_videos(article_id, video_id) VALUES (:articleId, :videoId)';
  await db.run(sql, {
    ':articleId': savedArticleId,
    ':videoId': videoId
  });
};

const readVideo = (videoPath) => {
  const videoFileContent = fs.readFileSync(path.join(config.docsPath, videoPath), 'utf-8');
  return yaml.parse(videoFileContent);
};

const insertVideo = async (db, video) => {
  const { filePath, title, description, url, ...otherFields } = video;

  const sql = 'INSERT INTO videos(file_path, title, description, url, data) VALUES (:filePath, :title, :description, :url, :data)';
  const { lastID: id } = await db.run(sql, {
    ':filePath': filePath,
    ':title': title,
    ':description': description,
    ':url': url,
    ':data': JSON.stringify(otherFields)
  });

  return id;
};

module.exports = addArticles;
