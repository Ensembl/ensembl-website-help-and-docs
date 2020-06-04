const fs = require('fs');
const globby = require('globby');

const config = require('../../config');
const parseMarkdown = require('./parseMarkdown');

const readSourceFiles = async () => {
  const { docsPath } = config;
  const searchPath = `${docsPath}/**/*.md`;
  const filePaths = await globby(searchPath);
  const articles = await Promise.all(filePaths.map(async (filePath) => {
    const pathWithinDocsDir = filePath.substring(docsPath.length + 1);
    // const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsedFileContent = await parseMarkdown(filePath);
    return Object.assign({}, parsedFileContent, { path: pathWithinDocsDir });
  }));

  return {
    articles
  }
};

module.exports = readSourceFiles;
