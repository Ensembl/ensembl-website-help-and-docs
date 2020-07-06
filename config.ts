import path from 'path';

const host = process.env.HOST || 'http://127.0.0.1:3000';

const docsPath = path.resolve(__dirname, 'docs');
const buildPath = process.env.NODE_ENV === 'production'
  ? path.resolve(__dirname)
  : path.resolve(__dirname, 'build');
const databaseDirectory = buildPath; // FIXME?
const databaseName = 'database.sqlite';
const indexDirectory = path.resolve(buildPath, 'indices');
const articlesIndexName = 'articlesIndex.json';
const buildImagesPath = path.resolve(buildPath, 'images');

export default {
  host,
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
