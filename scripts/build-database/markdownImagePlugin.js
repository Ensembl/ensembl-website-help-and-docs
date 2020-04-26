const visit = require('unist-util-visit');

const attacher = () => {
  const transformer = (tree, file) => {
    visit(tree, 'image', imageVisitor);
  };

  return transformer;
};

const imageVisitor = (node) => {
  let host;
  if (process.env.NODE_ENV === 'production') {
    host = 'http://193.62.55.158:30799';
  } else {
    host = 'http://localhost:3000';
  }
  node.url = `${host}${node.url}`;
};

module.exports = attacher;
