const visit = require('unist-util-visit');

const attacher = () => {
  const transformer = (tree, file) => {
    // console.log('tree', JSON.stringify(tree, null, 2));
    visit(tree, 'image', imageVisitor);
  };

  return transformer;
};

const imageVisitor = (node) => {
  let host;
  if (process.env.DEPLOYMENT === 'NOW') {
    host = 'https://zeit-serverless-exercise.now.sh';
  } else {
    host = 'http://localhost:3000';
  }
  node.url = `${host}${node.url}`;
};

module.exports = attacher;
