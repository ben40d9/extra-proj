const { readFileSync } = require("fs");
const { join } = require("path");
// const { stringify } = require("querystring");
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
    obj[headers[b].trim()] = eachLine[b].trim();
  }
  arrOfObjs.push(obj);
}
//now the var arr is an arrayOfObjects

//takes off the header obj in the arrOfObjs
let arrObj = arrOfObjs.filter((obj) => obj.winner !== "winner" || null);

//take out last weird element
const lastShitElement = arrObj.pop();

//testing reduce function that shows each mvp w/ times they won finalsMVP shown
const reduceResult = arrObj.reduce((acc, obj) => {
  return { ...acc, [obj.mvp]: (acc[obj.mvp] || 0) + 1 };

  //working on trying to make this obj a variable
  // const result = { ...acc, [obj.mvp]: (acc[obj.mvp] || 0) + 1 };
  // console.log(result);
}, {});
// console.log(reduceResult);
// console.log(Object.values(reduceResult));

//function to loop and list instances of x
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
let arr = arrObj;

//made a variable that holds the arr of objs w/ championships won
let keyForTeamChampCount = "winner";
const numOfChampionships = findChampionshipsWon(arr, keyForTeamChampCount);

//made a variable that holds the obj of mvpsWon
let key = "mvp";
const numOfMvps = findChampionshipsWon(arr, key);

//filter for players who have won mvp more than once
const moreThanOneMvp = numOfMvps.filter((obj) => obj.timesWon >= 2);

//variable for players w/ two finals mvps
const twoMvp = moreThanOneMvp.reduce((acc, curr) => {
  if (curr.timesWon === 2) {
    acc.push(curr.mvp);
  }
  return acc;
}, []);

//variable for players w/ three finals mvps
const threeMvp = moreThanOneMvp.reduce((acc, curr) => {
  if (curr.timesWon === 3) {
    acc.push(curr.mvp);
  }
  return acc;
}, []);

//variable for players w/ six finals mvps
const sixMvps = moreThanOneMvp.reduce((acc, curr) => {
  if (curr.timesWon === 6) {
    acc.push(curr.mvp);
  }
  return acc;
}, []);

//this variable shows the list of players who have won finalsMvp more than once,
//grouped w/ others who won the same amount of times
const groupedListOfMvps = `
  6 Finals MVP's: ${sixMvps[0]}
  3 Finals MVP's: ${threeMvp.join(", ")}
  2 Finals MVP's: ${twoMvp.join(", ")}
`;
console.log(groupedListOfMvps);

//function to get name of champion by entering the year
const getChampByYear = (year) => {
  const found = arrObj.find((obj) => obj.year === `${year}`);
  // console.log(found);
  return console.log(found.winner);
};
getChampByYear(2010);

//function to get name of finalsMvp in specific year
const mvpByYear = (year) => {
  const found = arrObj.find((obj) => obj.year === `${year}`);
  return console.log(found.mvp);
};
mvpByYear(2010);
