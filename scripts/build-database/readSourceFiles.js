const fs = require('fs');
const path = require('path');

const config = require('../../config');
const parseMarkdown = require('./parseMarkdown');

const readSourceFiles = async () => {
  const { articlesPath, videosPath } = config;
  const articles = await readFilesFromDir(articlesPath);
  const videos = await readFilesFromDir(videosPath);

  return {
    articles,
    videos
  };
};

const readFilesFromDir = async (dir) => {
  const promisedData = fs.readdirSync(dir)
    .map(async fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(dir, fileName);
      const fileData = await parseMarkdown(filePath);
      return Object.assign({}, fileData, { slug });
    });
  return await Promise.all(promisedData);
};

module.exports = readSourceFiles;
