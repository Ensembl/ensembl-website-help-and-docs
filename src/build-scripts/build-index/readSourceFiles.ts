import globby from 'globby';

import config from '../../../config';
import parseMarkdown from './parseMarkdown';
import {
  stripFileExtensions
 } from '../filePathHelpers';

 const readSourceFiles = async () => {
  const { docsPath } = config;
  const filePatterns = [
    `${docsPath}/**/*.md`
  ];
  const filePaths = await globby(filePatterns);

  // FIXME: we will want to create different indices for different collections

  const articles = await Promise.all(filePaths.map(async (filePath) => {
    const pathWithinDocsDir = filePath.substring(docsPath.length + 1);
    const articlePath = stripFileExtensions(pathWithinDocsDir);
    const parsedFileContent = await parseMarkdown(filePath) as { text: string };
    return Object.assign(
      {},
      parsedFileContent,
      {
        path: articlePath
      }
    );
  }));

  return {
    articles
  };
};

export default readSourceFiles;
