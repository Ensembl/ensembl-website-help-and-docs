import path from 'path';

import config from '../../../config';

import { createMenu } from './build-menus/buildMenus';
import { menuNameToPathMap } from './menuNameToPathMap';

const { docsPath } = config;

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
        urlNamespace: `/${name}`
      })
    }));
    return await Promise.all(menuPromises);
  } catch (error) {
    console.log('Error building the menus');
    console.log(error);
    process.exit(1);
  }
};

export default buildMenus;
