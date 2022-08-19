const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const data = contents.split("\r\n");
// console.log(data);

// can take any year and display the name of champion that year

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
    // console.log(eachLine);

    //create empty obj
    let obj = {};
    //iterate through each array & push it to obj var we made
    for (b = 0; b < eachLine.length; b++) {
      obj[headers[b].trim()] = eachLine[b].trim();
    }
    arr.push(obj);
  }
  //   console.log(JSON.stringify(arr));
  console.log(arr);
}
