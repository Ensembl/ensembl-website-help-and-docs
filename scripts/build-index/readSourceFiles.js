const fs = require('fs');
const path = require('path');

const config = require('../../config');
const parseFile = require('./parseFile');

const readSourceFiles = async () => {
  const { articlesPath } = config;
  const articles = await readFilesFromDir(articlesPath);

  return {
    articles
  };
};

const readFilesFromDir = async (dir) => {
  const promisedData = fs.readdirSync(dir)
    .map(async fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(dir, fileName);
      const fileData = await parseFile(filePath);
      return Object.assign({}, fileData, { slug });
    });
  return await Promise.all(promisedData);
};

module.exports = readSourceFiles;
