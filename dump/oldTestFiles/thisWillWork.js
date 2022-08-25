const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});
// console.log(contents);
const data = contents.split("\r\n");

const csvToArr = (str, seperator = ",") => {
  const headers = str.slice(0, str.indexOf("\n")).split(seperator);
  const rows = str.slice(str.indexOf("\n" + 1).split("\n"));

  const arrofObjs = rows.map((row) => {
    const values = row.split(seperator);
    const objWithHeaders = headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    console.log(arrofObjs);
    return objWithHeaders;
  });
  return arrofObjs;
  //   console.log(arrofObjs);
};
console.log(csvToArr());
