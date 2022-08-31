const { parse: parseCSV } = require("./src/parse-datasets/parsers/csv");
const { parse, join } = require('path');
const { root } = require('./datasets/root');
const { exists } = require('fs');

const filename = 'nba_finals.csv';
const target = join(root, filename);
const fileExists = exists(target,);

if (!fileExists) {
  return
}

parseCSV(target);

// . parse cli arguments
// . locate filename and check for errors
// . identify filetype, check if we support it
// . send to appropriate parser - this needs to be modular. maps!
// . parser should read file and pass to normalizer
// . normalizer should return optimal data structure for filetype
//   --------
// . parse cli arguments for question engine...
