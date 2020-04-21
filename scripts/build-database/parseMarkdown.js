const path = require('path');
const vfile = require('to-vfile');
const unified = require('unified');
const parse = require('remark-parse');
const remark2rehype = require('remark-rehype');
const extract = require('remark-extract-frontmatter');
const html = require('rehype-stringify');
const frontmatter = require('remark-frontmatter');
const yaml = require('yaml').parse;

const imagePlugin = require('./markdownImagePlugin');

const parseMarkdown = async (pathToFile) => {
  return await new Promise((resolve, reject) => {
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml: yaml })
      .use(imagePlugin)
      .use(remark2rehype)
      .use(html)
      .process(vfile.readSync(pathToFile), function(err, file) {
        if (err) {
          reject(err);
        } else {
          const html = String(file);
          resolve(Object.assign({}, file.data, { html }));
        }
      });
  });
};

module.exports = parseMarkdown;
