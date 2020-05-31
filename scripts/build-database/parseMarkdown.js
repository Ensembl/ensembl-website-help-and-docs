const unified = require('unified');
const parse = require('remark-parse');
const remark2rehype = require('remark-rehype');
const raw = require('rehype-raw');
const extract = require('remark-extract-frontmatter');
const html = require('rehype-stringify');
const frontmatter = require('remark-frontmatter');
const yaml = require('yaml').parse;

const imagePlugin = require('./markdownImagePlugin');

const parseMarkdown = async (content) => {
  return await new Promise((resolve, reject) => {
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml: yaml })
      .use(imagePlugin)
      .use(remark2rehype, {allowDangerousHtml: true})
      .use(raw)
      .use(html)
      .process(content, function(err, file) {
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
