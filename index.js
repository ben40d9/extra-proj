const { parseFile } = require("./src/parse-datasets/parseFile");
const { buildAbsoluteTargetPath } = require("./src/normalizers/filepath");

console.log(buildAbsoluteTargetPath("nba_finals.csv"));

// parseFile("nba_finals.csv");
