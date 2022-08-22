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
    obj[headers[b].trim()] = eachLine[b].trim().toLowerCase();
  }
  arrOfObjs.push(obj);
}
//this is the entire arrOfObjects
//   console.log(arr);

//takes off the header obj in the arrOfObjs
//cant figure out how to take out the null/undefined
const arrNoKeyObj = arrOfObjs.filter((obj) => obj.winner !== "winner" || null);
// console.log(arrNoKeyObj);

//function to get name of champion by entering the year
const getChampByYear = (year) => {
  const found = arrOfObjs.find((obj) => obj.year === `${year}`);
  // console.log(found);
  return console.log(found.winner);
};
getChampByYear(2010);

//function to get name of finalsMvp in specific year
const mvpByYear = (year) => {
  const found = arrNoKeyObj.find((obj) => obj.year === `${year}`);
  return console.log(found.mvp);
};
mvpByYear(2010);

//function to find the amount of championships for
// every team that HAS won has won the championiship
function findChampionshipsWon(arr, key) {
  let arr2 = [];

  arr.forEach((x) => {
    // looking to see if any object in arr2,
    //contains the key value(has the same winner value)
    if (
      arr2.some((val) => {
        return val[key] == x[key];
      })
    ) {
      //then increase the occurrence by 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          //ASK WHY THE SPACE PUTS KEY INTO A STRING
          // k["times Won"]++;
          k["timesWon"]++;
        }
      });
    } else {
      // then create a new object, initialize it with the current
      //iteration key value and set the timesWon to 1
      let a = {};
      a[key] = x[key];
      // a["times Won"] = 1;
      a["timesWon"] = 1;
      arr2.push(a);
    }
  });

  return arr2;
}
let arr = arrNoKeyObj;
let key = "winner";
// console.log(findChampionshipsWon(arr, key));

//function => enter players name, will return obj/info on
//year where he got mvp, if he did get more than one then
//show all, but if none say so(did not finish to if else it)
const finalsMvpOrNot = (name) => {
  const filtered = arrNoKeyObj.filter((obj) => obj.mvp === `${name}`);
  return console.log(filtered);
};
// console.log(finalsMvpOrNot("kobe bryant"));
finalsMvpOrNot("kobe bryant");

//function that takes a teams name and tell all of the years that they have won
const findTeamsYearsOfWinning = (nameOfTeam) => {
  let filtered = arrOfObjs.filter((obj) => obj.winner === `${nameOfTeam}`);
  // console.log(filtered);
  let arr = [];
  filtered.forEach((obj) => {
    console.log(obj.year);
    //put inside of brackets for an array w string value ||
    //leave out of brackets for just values
    arr = [obj.year];
    // console.log(arr);
    return arr;
  });
};
findTeamsYearsOfWinning("los angeles lakers");
