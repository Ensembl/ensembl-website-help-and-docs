import fs from 'fs-extra';
import path from 'path';
import globby from 'globby';

import config from '../../../config';

const copyAssets = async () => {
  const { docsPath, buildImagesPath } = config;
  const extensions = [
    'gif',
    'jpg',
    'jpeg',
    'png',
    'pdf',
    'svg'
  ];

  const patterns = extensions.map(ext => `${docsPath}/**/*.${ext}`);
  const filePaths = await globby(patterns);
  filePaths.forEach((filePath) => {
    const internalPath = filePath.substr(docsPath.length + 1);
    const destinationPath = path.resolve(buildImagesPath, internalPath);
    fs.copySync(filePath, destinationPath);
  });

  console.log('Static assets copied successfully');
};

export default copyAssets;
