const { readFileSync } = require("fs");
const { join } = require("path");
const { buildAbsoluteTargetPath } = require("../../normalizers/filepath");
const { contents } = require("./csv");

// test("content returns our csv file's contents", () => {
//   const nbaPath = buildAbsoluteTargetPath("nba_finals.csv");

//   //   contents.
// });
