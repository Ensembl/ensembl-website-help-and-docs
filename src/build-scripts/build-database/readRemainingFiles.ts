/*
Decide whether this is even necessary. Will there be files not listetd in menus
(and thus not having their own urls?)
*/

import fs from 'fs';
import globby from 'globby';
import yaml from 'yaml';

import config from '../../../config';
import parseMarkdown from './parseMarkdown';
import {
  slugifyPath,
  stripFileExtensions
 } from '../filePathHelpers';

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

const isMarkdownFile = (filePath: string) => filePath.endsWith('.md');

const isYamlFile = (filePath: string) => filePath.endsWith('.yml');

export default readSourceFiles;
