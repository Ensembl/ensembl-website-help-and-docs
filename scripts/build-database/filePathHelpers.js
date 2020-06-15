const path = require('path');
const { kebabCase } = require('lodash');

const config = require('../../config');

// Transform file path into a slug (hyphen-separates string)
const slugifyPath = (filePath) => {
  const withoutExtensions = stripFileExtensions(filePath);
  const withoutSlashes = withoutExtensions.replace('/', '-');
  return kebabCase(withoutSlashes);
};

const stripFileExtensions = (filePath) => {
  return filePath.split('.').shift();
};

/*
params:
- sourceFilePath: string, starts from docs path
- relation: { docsRootPath: string } or { relativePath: string }
- returnAbsolutePath: boolean, optional
*/
const buildPathToRelatedItem = (params) => {
  const { sourceFilePath, relation, returnAbsolutePath } = params;
  let relationPath;
  if (relation.docsRootPath) {
    relationPath = relation.docsRootPath;
  } else if (relation.relativePath) {
    const currentDirPath = sourceFilePath.split('/').slice(0, -1).join('/');
    relationPath = path.join(currentDirPath, relation.relativePath);
  }
  if (returnAbsolutePath) {
    return path.join(config.docsPath, relationPath);
  } else {
    return relationPath;
  }
};

module.exports = {
  slugifyPath,
  stripFileExtensions,
  buildPathToRelatedItem
};
