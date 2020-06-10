const { kebabCase } = require('lodash');

// Transform file path into a slug (hyphen-separates string)
const slugifyPath = (filePath) => {
  const withoutExtensions = stripFileExtensions(filePath);
  const withoutSlashes = withoutExtensions.replace('/', '-');
  return kebabCase(withoutSlashes);
};

const stripFileExtensions = (filePath) => {
  return filePath.split('.').shift();
};

module.exports = {
  slugifyPath,
  stripFileExtensions
};
