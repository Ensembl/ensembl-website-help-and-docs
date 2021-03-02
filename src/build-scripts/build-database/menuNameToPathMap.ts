/**
 * Map between the name of each collection of documents
 * and the directory for the root table of contents file.
 * The name of a document collection is also used as namespace for urls.
 */

export const menuNameToPathMap = new Map([
  ['help', 'ensembl-help'],
  ['about', 'about-ensembl']
]);

export const pathToMenuNameMap = new Map(
  [...menuNameToPathMap.entries()]
    .map(([menuName, dirName]) => [dirName, menuName])
);
