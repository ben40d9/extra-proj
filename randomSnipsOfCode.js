const { readFileSync } = require("fs");
const { join } = require("path");
const { stringify } = require("querystring");
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
let arrObj = arrOfObjs.filter((obj) => obj.winner !== "winner" || null);
// console.log(arr);

//take out last weird element
const lastShitElement = arrObj.pop();
// console.log(arr);

//testing reduce function that shows each mvp w/
//times they won finalsMVP shown
const reduceResult = arrObj.reduce((acc, obj) => {
  return { ...acc, [obj.mvp]: (acc[obj.mvp] || 0) + 1 };

  //working on trying to make this obj a variable
  // const result = { ...acc, [obj.mvp]: (acc[obj.mvp] || 0) + 1 };
  // console.log(result);
}, {});
// console.log(reduceResult);
// console.log(Object.values(reduceResult));

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
console.log(threeMvp);

//variable for players w/ six finals mvps
const sixMvps = moreThanOneMvp.reduce((acc, curr) => {
  if (curr.timesWon === 6) {
    acc.push(curr.mvp);
  }
  return acc;
}, []);
console.log(sixMvps);

//map out players how you said
// const mapOut = (moreThanOneMvp) => {
//   let two = [];
//   let three = [];
//   let six = [];
//   const mapped = moreThanOneMvp.forEach((obj) => {
//     if (obj.timesWon === 2) {
//       two = [...obj.winner];
//     } else if (obj.timesWon === 3) {
//       three = [...obj.winner];
//     } else if (obj.timesWon === 6) {
//       six = [...obj.winner];
//     }
//   });
//   return mapped;
// };
// console.log(mapOut());
