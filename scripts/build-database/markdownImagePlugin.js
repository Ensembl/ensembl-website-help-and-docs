const visit = require('unist-util-visit');

const attacher = () => {
  const transformer = (tree, file) => {
    // console.log('tree', JSON.stringify(tree, null, 2));
    visit(tree, 'image', imageVisitor);
  };

  return transformer;
};

const imageVisitor = (node) => {
  // console.log('node:', JSON.stringify(node, null, 2));
};

module.exports = attacher;
