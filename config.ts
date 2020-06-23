import path from 'path';

const docsPath = path.resolve(__dirname, 'docs');
const databaseDirectory = path.resolve(__dirname, 'build'); // FIXME?
const databaseName = 'database.sqlite';
const indexDirectory = path.resolve(__dirname, 'build/indices');
const articlesIndexName = 'articlesIndex.json';
const buildPath = path.resolve(__dirname, 'build');
const buildImagesPath = path.resolve(buildPath, 'images');

export default {
  buildPath,
  buildImagesPath,
  docsPath,
  articlesPath: path.join(docsPath, 'article'),
  videosPath: path.join(docsPath, 'video'),
  indexDirectory,
  articlesIndexName,
  articlesIndexPath: path.join(indexDirectory, articlesIndexName),
  databaseDirectory,
  databaseName,
  databasePath: path.join(databaseDirectory, databaseName)
};
