import path from 'path';
import { kebabCase } from 'lodash';

import config from '../../config';

import { Relation } from '../types/Relation';

// Transform file path into a slug (hyphen-separates string)
export const slugifyPath = (filePath: string) => {
  const withoutExtensions = stripFileExtensions(filePath);
  const withoutSlashes = withoutExtensions.replace('/', '-');
  return kebabCase(withoutSlashes);
};

export const stripFileExtensions = (filePath: string) => {
  return filePath.split('.').shift();
};

type BuildPathToRelatedItemParams = {
  sourceFilePath: string;
  relation: Relation;
  returnAbsolutePath?: boolean
};

// transforms absolute file path to the path relative to the documents root
export const fromDocumentsRoot = (absFilePath: string) => {
  const [_, filePath] = absFilePath.split(config.docsPath);
  console.log('absFilePath', absFilePath, 'filePath', filePath);
  return filePath;
};

export const buildPathToRelatedItem = (params: BuildPathToRelatedItemParams) => {
  const { sourceFilePath, relation, returnAbsolutePath } = params;
  let relationPath;
  if ('docsRootPath' in relation) {
    relationPath = relation.docsRootPath;
  } else if ('relativePath' in relation) {
    const currentDirPath = sourceFilePath.split('/').slice(0, -1).join('/');
    relationPath = path.join(currentDirPath, relation.relativePath);
  }
  if (returnAbsolutePath) {
    return path.join(config.docsPath, relationPath);
  } else {
    return relationPath;
  }
};
