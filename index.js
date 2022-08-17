const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const csvFile = contents.split("\r\n");
// console.log(csvFile);

// //this creates one obj w ever csv val WRONG
// const testArrOfObj = { ...data };
// console.log(testArrOfObj);

// const tryTheMap = data.map()

//know i need to map through array ie, need 'eachString' to equal a single str in the arr:
//data.map((eachString, index) => {(value: eachString, id: index + 1)})
