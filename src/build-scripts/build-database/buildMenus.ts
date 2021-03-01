import path from 'path';

import config from '../../../config';

import { createMenu } from './build-menus/buildMenus';

const { docsPath } = config;

// map between the name of each collection of documentation
// and the directory for the root table of contents file 
const menuNameToPathMap = new Map([
  ['help', 'ensembl-help'],
  ['about', 'about-ensembl']
]);
const menuPaths = [...menuNameToPathMap.entries()]
  .map(([name, dirname]) =>
    [name, path.resolve(docsPath, dirname, 'toc.yml')]
  );


const buildMenus = async () => {
  try {
    const menuPromises = menuPaths.map(async ([name, tocPath]) => ({
      name,
      data: await createMenu({
        tocPath,
        url: `/${name}`
      })
    }));
    return await Promise.all(menuPromises);
  } catch (error) {
    console.log('error building the menus', error);
  }
};

export default buildMenus;
