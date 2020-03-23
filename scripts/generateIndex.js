const fs = require('fs');
const path = require('path');
const vfile = require('to-vfile');
const unified = require('unified');
const parse = require('remark-parse');
const extract = require('remark-extract-frontmatter');
const frontmatter = require('remark-frontmatter');
const strip = require('strip-markdown');
const stringify = require('remark-stringify')
const yaml = require('yaml').parse;
const lunr = require('lunr');

const config = require('../config');

const parseMarkdown = async (pathToFile) => {
  return await new Promise((resolve, reject) => {
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml: yaml })
      .use(strip)
      .use(stringify)
      .process(vfile.readSync(path.resolve(__dirname, `../markdown/${pathToFile}.md`)), function(err, file) {
        if (err) {
          reject(err);
        } else {
          const text = String(file);
          resolve(Object.assign({ path: pathToFile }, { text }));
        }
      });
  });
};

const run = async () => {
  const dirPath = path.resolve(__dirname, '../markdown');
  const promisedData = fs.readdirSync(dirPath)
    .map(fileName => fileName.replace(/\.md$/, ''))
    .map(parseMarkdown);
  const data = await Promise.all(promisedData);
  const index = generateIndex(data);
  return index;
  // writeIndex(index);
};

const generateIndex = (documents) => {
  const index = lunr(function() {
    this.ref('path');
    this.field('text');

    documents.forEach(function(doc) {
      this.add(doc);
    }, this);
  });

  return index;
};

const writeIndex = (index) => {
  const indexPath = path.resolve(config.indexOutputPath, config.indexName);
  fs.writeFileSync(indexPath, JSON.stringify(index));
};

module.exports = run;
