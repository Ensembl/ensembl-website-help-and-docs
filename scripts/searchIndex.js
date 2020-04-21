const path = require('path');
const lunr = require('lunr');

const searchIndex = (query, index) => {
  const idx = lunr.Index.load(index);
  return idx.search(query);
};

module.exports = searchIndex;
