const { buildAbsoluteTargetPath } = require("./filepath");
const { root } = require("../../datasets/root");
const { join, dirname } = require("path");
// const ourRoot = __dirname

// const dir = dirname("/playground/extra-proj/datasets/nba_finals.csv");

test("buildAbsoluteTargetPath returns an absolute path", () => {
  // 1. ARRANGE (set up) your mock data
  //our exact path for this exact path to csv.
  // b/c this only a test for this nba csv file
  const csvFilePath = "nba_finals.csv";
  const expectedPath = join(root, csvFilePath);
  // 2. ACT - run your function with applicable mock data
  const result = buildAbsoluteTargetPath(csvFilePath);

  // 3. ASSERT - use jest expect() and matchers to confirm function responds as it should.
  expect(result).toBe(expectedPath);
});
