const { parseFile } = require("./src/parse-datasets/parseFile");
const {
  buildAbsoluteTargetPath,
  parseTargetFilename,
} = require("./src/normalizers/filepath");
const { parse } = require("./src/parse-datasets/parsers/csv");

//filePath works correctly here
console.log(buildAbsoluteTargetPath("nba_finals.csv"));

//variable for targetPath to the nba_finals.csv
const targetPathForNbaCsv = buildAbsoluteTargetPath("nba_finals.csv");

//test that the parseTargetFile will parse our target path
console.log(parseTargetFilename(targetPathForNbaCsv));

//check if parse works correctly
console.log(parse(targetPathForNbaCsv));
