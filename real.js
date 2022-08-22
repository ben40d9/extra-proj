const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const data = contents.split("\r\n");

//create empty array
let arrOfObjs = [];

//create header, data[0], using the first str in the array(const data)
//will use as the keys for every obj in arr.
//the headers comeback with their first letter capitalized
let uppercaseHeaders = data[0].split(",");
//changed my variable so that my keys could all be lowerCase
const headers = uppercaseHeaders.map((ele) => ele.toLowerCase());
//   console.log(headers);

//iterate over array and make each element in the array its own array
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
//this is the entire arrOfObjects
//   console.log(arr);

//function to get name of champion by entering the year
const getChampByYear = (year) => {
  const found = arrOfObjs.find((obj) => obj.year === `${year}`);
  // console.log(found);
  return console.log(found.winner);
};
getChampByYear(2010);

//function to find the amount of times 'x' team has won the championiship
function findChampionshipsWon(arr, key) {
  let arr2 = [];

  arr.forEach((x) => {
    // Checking if there is any object in arr2
    // which contains the key value
    if (
      arr2.some((val) => {
        return val[key] == x[key];
      })
    ) {
      // If yes! then increase the occurrence by 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          // k["times Won"]++;
          k["timesWon"]++;
        }
      });
    } else {
      // If not! Then create a new object initialize
      // it with the present iteration key's value and
      // set the occurrence to 1
      let a = {};
      a[key] = x[key];
      // a["times Won"] = 1;
      a["timesWon"] = 1;
      arr2.push(a);
    }
  });

  return arr2;
}
let arr = arrOfObjs;
let key = "winner";
console.log(findChampionshipsWon(arr, key));
