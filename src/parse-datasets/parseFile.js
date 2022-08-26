// This file contains a function that takes a file path, identifies its type by extension, and passes it to
// the relvant parser from ./parsers/ if there is a match. otherwise (default case) it will return a soft error.

const parsers = require("./parsers/index");
console.log(parsers);

// function parseFile(path) {
//   // get the extension off the file path
//   const splitPath = path.split(".");
//   const filetype = splitPath[splitPath.length - 1];

//   // find a parser whose 'ext' field matches the extension
//   const matchedParser = parsers.find((p) => p.ext === filetype);
//   if (matchedParser !== undefined) {
//     matchedParser.parse(path);
//     return;
//   }

//   // default behavior
//   console.log(`\nNo parser found for the given filetype: ${filetype}`);
//   return;
// }

// parseFile("../../datasets/nba_finals.csv ");
