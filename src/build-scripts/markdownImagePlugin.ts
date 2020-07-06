import visit from 'unist-util-visit';
import { Node } from 'unist'

import config from '../../config';

const attacher = () => {
  const transformer = (tree: Node, file: any) => {
    // FIXME: the file parameter is vfile
    const { path: filePath } = file;
    visit(tree, 'image', imageVisitor(filePath));
  };

  return transformer;
};

const imageVisitor = (filePath: string) => (node: Node) => {
  const markdownDirectory = filePath.substring(config.docsPath.length + 1)
    .split('/')
    .slice(0, -1)
    .join('/');
  const destPath = `/images/${markdownDirectory}/${node.url}`;

  const { host } = config;
  node.url = `${host}${destPath}`;
};

export default attacher;
