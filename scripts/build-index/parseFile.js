const vfile = require('to-vfile');
const unified = require('unified');
const parse = require('remark-parse');
const extract = require('remark-extract-frontmatter');
const frontmatter = require('remark-frontmatter');
const strip = require('strip-markdown');
const stringify = require('remark-stringify')
const yaml = require('yaml').parse;


const parseMarkdown = async (filePath) => {
  return await new Promise((resolve, reject) => {
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml })
      .use(strip)
      .use(stringify)
      .process(vfile.readSync(filePath), function(err, file) {
        if (err) {
          reject(err);
        } else {
          const text = String(file);
          resolve({ text });
        }
      });
  });
};

module.exports = parseMarkdown;
