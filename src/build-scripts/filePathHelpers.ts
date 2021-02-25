import path from 'path';
import { kebabCase } from 'lodash';

import config from '../../config';

import { Relation } from '../types/Relation';

// Transform file path into a slug (hyphen-separates string)
export const slugifyPath = (filePath: string) => {
  const { dir, name } = path.parse(filePath);
  return kebabCase([
    dir.split(path.sep),
    name
  ].flat().join('-'));
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
  return filePath;
};

export const buildPathToRelatedItem = (params: BuildPathToRelatedItemParams) => {
  const { sourceFilePath, relation, returnAbsolutePath } = params;
  let relationPath;
  if ('docs_root_path' in relation) {
    relationPath = relation.docs_root_path;
  } else if ('relative_path' in relation) {
    const currentDirPath = sourceFilePath.split('/').slice(0, -1).join('/');
    relationPath = path.join(currentDirPath, relation.relative_path);
  }
  if (returnAbsolutePath) {
    return path.join(config.docsPath, relationPath);
  } else {
    return relationPath;
  }
};
