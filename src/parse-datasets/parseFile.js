// This file contains a function that takes a file path, identifies its type by extension, and passes it to
// the relvant parser from ./parsers/ if there is a match. otherwise (default case) it will return a soft error.

const parsers = require("./parsers/index");

// //logs to see how I can manipulate data
// console.log(parsers.parse);
// console.log(Object.values(parsers));

function parseFile(path) {
  //get the extension off of the file path
  const splitPath = path.split(".");
  const fileType = splitPath[splitPath.length - 1];

  //set up arr of objs so i can manipulate easier
  const eachObj = Object.values(parsers);

  // find a parser whose 'ext' field matches the extension
  const matchedParser = eachObj.find((p) => p.ext === `${fileType}`);
  if (matchedParser !== undefined) {
    matchedParser.parse(path);
    return;
  }
  console.log(`\nNo parser found for the given filetype: ${filetype}`);
  return;
}

// module.exports = {
//   parseFile
// }

// //THIS IS FIRST ONE I MADE, BUT SWITCHED TO ARR OF OBJS
// //SO I COULD PUSH TO MATCHING FUNCTION EASIER
// function parseFile(path) {
//   //get the extension off of the file path
//   const splitPath = path.split(".");
//   const fileType = splitPath[splitPath.length - 1];
//   // console.log(fileType);

//   // find a parser whose 'ext' field matches the extension
//   // const keyOfPath = Object.keys();
//   for (const key in parsers) {
//     // console.log(key);
//     if (key === fileType) {
//       const keyOfFound = key;
//       // console.log(keyOfFound);
//     }
//   }
//   //default behavior
//   console.log(`\nNo parser found for the given filetype: ${fileType}`);
//   return;
// }
// parseFile("../../datasets/nba_finals.csv");
