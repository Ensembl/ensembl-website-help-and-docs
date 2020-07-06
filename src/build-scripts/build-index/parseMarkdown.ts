import unified from 'unified';
// @ts-ignore
import vfile from 'to-vfile';
import parse from 'remark-parse';
// @ts-ignore
import extract from 'remark-extract-frontmatter';
import frontmatter from 'remark-frontmatter';
// @ts-ignore
import strip from 'strip-markdown';
import stringify from 'remark-stringify';
import yaml from 'yaml';


const parseMarkdown = async (filePath: string) => {
  return await new Promise((resolve, reject) => {
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml: yaml.parse })
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

export default parseMarkdown;
