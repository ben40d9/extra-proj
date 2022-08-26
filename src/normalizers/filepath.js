const { root } = require('../../datasets/root'),
  {
    parse,
    join,
    format
  } = require('path');

function buildAbsoluteTargetPath(filename) {
  console.log(root)
  return join(root, filename)
}

function parseTargetFilename(filename) {
  return parse(filename);
}

module.exports = {
  buildAbsoluteTargetPath,
  parseTargetFilename,
}
