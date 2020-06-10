const fs = require('fs');
const globby = require('globby');
const yaml = require('yaml');

const config = require('../../config');
const parseMarkdown = require('./parseMarkdown');
const {
  slugifyPath,
  stripFileExtensions
 } = require('./filePathHelpers');

const readSourceFiles = async () => {
  const { docsPath } = config;
  const filePatterns = [
    `${docsPath}/**/*.md`,
    `${docsPath}/**/index.yml`
  ];
  const filePaths = await globby(filePatterns);
  const articles = await Promise.all(filePaths.map(async (filePath) => {
    const pathWithinDocsDir = filePath.substring(docsPath.length + 1);
    const articlePath = stripFileExtensions(pathWithinDocsDir);
    let slug = slugifyPath(pathWithinDocsDir);
    let parsedFileContent;
    if (isMarkdownFile(filePath)) {
      parsedFileContent = await parseMarkdown(filePath);
    } else if (isYamlFile(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      parsedFileContent = yaml.parse(fileContent);
    }
    slug = parsedFileContent.slug || slug;
    return Object.assign(
      {},
      parsedFileContent,
      {
        path: articlePath,
        filePath: pathWithinDocsDir,
        slug
      }
    );
  }));

  return {
    articles
  }
};

const isMarkdownFile = (filePath) => filePath.endsWith('.md');

const isYamlFile = (filePath) => filePath.endsWith('.yml');

module.exports = readSourceFiles;
