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

// transforms absolute file path to the path relative to the documents root
export const fromDocumentsRoot = (absFilePath: string) => {
  const [_, filePath] = absFilePath.split(config.docsPath);
  return filePath;
};
