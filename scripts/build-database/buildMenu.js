const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const config = require('../../config');

const buildMenu = () => {
  const ensemblHelpMenuEntryPath = path.resolve(config.docsPath, 'ensembl-help');
  populateMenu(ensemblHelpMenuEntryPath);
};

const populateMenu = (folderPath) => {
  const tocPath = path.resolve(folderPath, 'toc.yml');
  const exists = fs.statSync(tocPath).isFile();
  if (!exists) {
    return;
  }
  const unparsedToc = fs.readFileSync(tocPath, 'utf-8');
  const toc = yaml.parse(unparsedToc);
  const result = toc.map((menuItem) => {
    if (menuItem.href === 'blah') {
      // FIXME: remove this temporary branch
      return menuItem;
    } else if (menuItem.href) {
      const itemPath = path.resolve(folderPath, menuItem.href);
      const stats = fs.lstatSync(itemPath);
      if (stats.isDirectory()) {
        const submenu = populateMenu(itemPath);
        menuItem.items = submenu;
      }
    }
    return menuItem;
  });

  return result;
};

module.exports = buildMenu;
