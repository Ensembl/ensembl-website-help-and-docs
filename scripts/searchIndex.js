const path = require('path');
const lunr = require('lunr');

// const pathToIndex = path.resolve(__dirname, '../build/indices/index.json');
// const index = require(pathToIndex);

// const config = require('../config');
// const pathToIndex = path.resolve(config.indexOutputPath, config.indexName);
// const index = require(pathToIndex);


const searchIndex = (query, index) => {
  const idx = lunr.Index.load(index);
  return idx.search(query);
};

module.exports = {
  searchIndex
};
