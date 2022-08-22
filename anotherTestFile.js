const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const data = contents.split("\r\n");

let arrOfObjs = [];

// console.log(data[0]);

let uppercaseHeaders = data[0].split(",");

const headers = uppercaseHeaders.map((ele) => ele.toLowerCase());

for (i = 0; i < data.length; i++) {
  const eachLine = data[i].split(",");
  // console.log(eachLine);

  //create empty obj
  let obj = {};
  //iterate through each array & push it to obj var we made
  for (b = 0; b < eachLine.length; b++) {
    obj[headers[b].trim()] = eachLine[b].trim().toLowerCase();
  }
  arrOfObjs.push(obj);
}
//now the var arr is an arrayOfObjects
console.log(arrOfObjs);

//THIS FILE IS FOR TESTING INDIVIDUAL FUNCTIONS IN THE LOG
//W/O RANDOM SHIT EVERYWHERE IN THE LOG

const getYearsofChampionships = (team) => {
  console.log(
    arrOfObjs.forEach((obj) => {
      console.log(Object.values(obj));
    })
  );

  //   const found = arrOfObjs.filter();
};
getYearsofChampionships();
