import unified from 'unified';
// @ts-ignore
import vfile from 'to-vfile';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
// @ts-ignore
import raw from 'rehype-raw';
// @ts-ignore
import extract from 'remark-extract-frontmatter';
import frontmatter from 'remark-frontmatter';
// @ts-ignore
import html from 'rehype-stringify';
import yaml from 'yaml';

import imagePlugin from './markdownImagePlugin';

const parseMarkdown = async (pathToFile: string) => {
  return await new Promise((resolve, reject) => {
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml: yaml.parse })
      .use(imagePlugin)
      .use(remark2rehype, {allowDangerousHtml: true})
      .use(raw)
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

export default parseMarkdown;
