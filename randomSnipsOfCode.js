const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const data = contents.split("\r\n");

let arrOfObjs = [];

let uppercaseHeaders = data[0].split(",");

const headers = uppercaseHeaders.map((ele) => ele.toLowerCase());

for (i = 0; i < data.length; i++) {
  const eachLine = data[i].split(",");

  //create empty obj
  let obj = {};
  //iterate through each array & push it to obj var we made
  for (b = 0; b < eachLine.length; b++) {
    obj[headers[b].trim()] = eachLine[b].trim().toLowerCase();
  }
  arrOfObjs.push(obj);
}
//now the var arr is an arrayOfObjects

//takes off the header obj in the arrOfObjs
let arr = arrOfObjs.filter((obj) => obj.winner !== "winner" || null);
// console.log(arr);

const reduceResult = arr.reduce((acc, obj) => {
  return { ...acc, [obj.mvp]: (acc[obj.mvp] || 0) + 1 };
}, {});
console.log(reduceResult);
