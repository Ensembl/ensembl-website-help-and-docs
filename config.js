const path = require('path');

module.exports = {
  indexOutputPath: path.resolve(__dirname, 'build/indices'),
  indexName: 'index.json',
  databaseOutputPath: path.resolve(__dirname, 'build'),
  databaseName: 'database.db'
};
