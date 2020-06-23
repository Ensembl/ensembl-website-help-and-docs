import visit from 'unist-util-visit';
import {Node} from 'unist'

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

  let host;
  if (process.env.NODE_ENV === 'production') {
    host = 'http://193.62.55.158:30799';
  } else {
    // FIXME: this should also come from the config
    host = 'http://127.0.0.1:3000';
  }
  node.url = `${host}${destPath}`;
};

export default attacher;
