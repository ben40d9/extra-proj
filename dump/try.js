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
  // console.log(eachLine);

  //create empty obj
  let obj = {};
  //iterate through each array & push it to obj var we made
  for (b = 0; b < eachLine.length; b++) {
    obj[headers[b].trim()] = eachLine[b].trim();
  }
  arrOfObjs.push(obj);
}
//now the var arr is an arrayOfObjects
// console.log(arrOfObjs);

//FUNCTION TIME
//function to get name of champion by entering the year
const getChampByYear = (year) => {
  const found = arrOfObjs.find((obj) => obj.year === `${year}`);
  //   console.log(found);
  return console.log(found.winner);
};
getChampByYear(2010);

//function to get the years that a specific team has won
const getYearsofChampionships = (team) => {
  console.log(
    arrOfObjs.forEach((obj) => {
      console.log(Object.values(obj));
    })
  );

  //   const found = arrOfObjs.filter();
};
getYearsofChampionships();
