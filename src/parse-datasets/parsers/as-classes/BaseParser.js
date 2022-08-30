const { readFileSync } = require("fs")
  , {
    join,
    extname
  } = require("path")
  , ft = require('../index');

class BaseParser {

  constructor(absolutePath) {
    this.supportedFiletypes = Object.keys(ft);
    this.absolutePath = absolutePath;
    this.filetype = "";
    this.parsedData = null;
  }

  getPath() {
    return this.absolutePath
  }

  getFileType() {
    if (!this.filetype) {
      this.filetype = extname(this.absolutePath)
    }
    return this.fileType;
  }
}

module.exports = {
  BaseParser,
};

