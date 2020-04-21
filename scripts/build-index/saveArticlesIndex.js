const fs = require('fs');
const mkdirp = require('mkdirp');

const config = require('../../config');

const saveArticlesIndex = async (index) => {
  const outputDirectory = await mkdirp(config.indexDirectory);
  fs.writeFileSync(config.articlesIndexPath, JSON.stringify(index));
  console.log('Index file generated successfully');
};

module.exports = saveArticlesIndex;
