const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const csvFile = contents.split("\r\n");
// console.log(csvFile);

const eachElement = csvFile.forEach((element) => {
  // console.log(element);
  const splitLineElement = element.split(",");
  // console.log(splitLineElement);

  // //this will find if its true of false, whether or not x is included
  // console.log(splitLineElement.includes("2019"));

  function pleaseWork(year) {
    splitLineElement.find((arr) => {
      if (arr.includes(year)) {
        console.log(element);
      } else {
        console.log("error");
      }
    });
  }
  pleaseWork(2019);
});

// const findWinner = csvFile.find()

// const arrOfArr = csvFile.split(",");
// console.log(arrOfArr);

// //this creates one obj w ever csv val WRONG
// const testArrOfObj = { ...csvFile };
// console.log(testArrOfObj);

// const tryTheMap = data.map()

//know i need to map through array ie, need 'eachString' to equal a single str in the arr:
//data.map((eachString, index) => {(value: eachString, id: index + 1)})
