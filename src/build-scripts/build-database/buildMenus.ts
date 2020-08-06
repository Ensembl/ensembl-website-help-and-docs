import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

import config from '../../../config';

import { MenuItem } from 'src/types/ParsedMenu';

export type Menus = Array<{
  name: string;
  data: MenuItem[]
}>;

const buildMenus = () => {
  const ensemblHelpMenuEntryPath = path.resolve(config.docsPath, 'ensembl-help');
  
  // returning an array of a single menu, because expecting more menus in future
  return [{
    name: 'ensembl-help',
    data: populateMenu(ensemblHelpMenuEntryPath)
  }];
};

const populateMenu = (folderPath: string): MenuItem[] => {
  const tocPath = path.resolve(folderPath, 'toc.yml');
  const exists = fs.statSync(tocPath).isFile();
  if (!exists) {
    return;
  }
  const unparsedToc = fs.readFileSync(tocPath, 'utf-8');
  const toc = yaml.parse(unparsedToc);
  const result = toc.map((menuItem: MenuItem) => {
    if (menuItem.href === 'blah') {
      // FIXME: remove this temporary branch
      return menuItem;
    } else if (menuItem.href) {
      const itemPath = path.resolve(folderPath, menuItem.href);
      const stats = fs.lstatSync(itemPath);
      if (stats.isDirectory()) {
        const submenu = populateMenu(itemPath);
        menuItem.items = submenu;
      } else if (stats.isFile()) {
        const internalPath = itemPath.substring(config.docsPath.length + 1);
        menuItem = Object.assign({}, menuItem, { path: internalPath });
      }
    }
    return menuItem;
  });
  return result;
};

export default buildMenus;
