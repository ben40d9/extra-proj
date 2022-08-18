const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const data = contents.split("\r\n");

function solution(data) {
  //create empty array
  let arr = [];

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

    //create empty obj
    let obj = {};
    //iterate through each array & push it to obj var we made
    for (b = 0; b < eachLine.length; b++) {
      obj[headers[b].trim()] = eachLine[b].trim();
    }
    arr.push(obj);
  }
  //   console.log(arr);

  //   let found = arr.find((element) => element.year === "1950");
  //   console.log(found);

  //finding the winner by year
  function getChampByYear(year) {
    let found = arr.find((element) => {
      console.log(element.year === year);
    });
  }
  console.log(getChampByYear(1950));
}

solution(data);
