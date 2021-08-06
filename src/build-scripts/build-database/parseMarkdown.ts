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

import imagePlugin from './imagePlugin';

const parseMarkdown = async (pathToFile: string) => {
  const processedFile = await
    unified()
      .use(parse)
      .use(frontmatter, ['yaml', 'toml'])
      .use(extract, { yaml: yaml.parse })
      .use(remark2rehype, {allowDangerousHtml: true})
      .use(raw)
      .use(imagePlugin)
      .use(html)
      .process(vfile.readSync(pathToFile));


  return {
    ...processedFile.data as Record<string, unknown>,
    html: String(processedFile)
  };
};

export default parseMarkdown;
