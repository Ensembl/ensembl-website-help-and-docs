const path = require('path');
const lunr = require('lunr');

const config = require('../config');

const pathToIndex = path.resolve(config.indexOutputPath, config.indexName);
const index = require(pathToIndex);

const idx = lunr.Index.load(index);

const searchIndex = (query) => {
  return idx.search(query);
};

module.exports = {
  searchIndex
};
