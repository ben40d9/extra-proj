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
// console.log(arrOfObjs);

//takes off the header obj in the arrOfObjs
const arrNoKeyObj = arrOfObjs.filter((obj) => obj.year !== "year" || "");
// console.log(arrNoKeyObj);

//THIS FILE IS FOR TESTING INDIVIDUAL FUNCTIONS IN THE LOG
//W/O RANDOM SHIT EVERYWHERE IN THE LOG

//function to get name of champion by entering the year
// const getChampByYear = (year) => {
//   const found = arrOfObjs.find((obj) => obj.year === `${year}`);
//   //   console.log(found);
//   return console.log(found.winner);
// };
// getChampByYear(2010);

// //function to find the amount of times 'x' team has won the championiship
// function findChampionshipsWon(arr, key) {
//   let arr2 = [];

//   arr.forEach((x) => {
//     // looking to see if any object in arr2,
//     //contains the key value(has the same winner value)
//     if (
//       arr2.some((val) => {
//         return val[key] == x[key];
//       })
//     ) {
//       //then increase the occurrence by 1
//       arr2.forEach((k) => {
//         if (k[key] === x[key]) {
//           //ASK WHY THE SPACE PUTS KEY INTO A STRING
//           // k["times Won"]++;
//           k["timesWon"]++;
//         }
//       });
//     } else {
//       // then create a new object, initialize it with the current
//       //iteration key value and set the timesWon to 1
//       let a = {};
//       a[key] = x[key];
//       // a["times Won"] = 1;
//       a["timesWon"] = 1;
//       arr2.push(a);
//     }
//   });

//   return arr2;
// }
// let arr = arrNoKeyObj;
// let key = "winner";
// console.log(findChampionshipsWon(arr, key));

//function to get name of finalsMvp in specific year
const mvpByYear = (year) => {
  const found = arrNoKeyObj.find((obj) => obj.year === `${year}`);
  return console.log(found.mvp);
};

mvpByYear(2010);
mvpByYear(2012);
