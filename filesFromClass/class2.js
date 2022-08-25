const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join("./nba_finals.csv"), {
  encoding: "utf-8",
});

// setup our data so we can work with it in the function
const data = contents.split("\r\n");
console.log(data);

//function that takes a teams name and tell all of the years that they have won
function solution(arr, team) {
  // setup an array to put all the matching years in
  const years = [];

  // loop through the seasons
  for (let i = 0; i < arr.length; i++) {
    // "target" is the current pass in the iteration, but also split at ','
    const target = arr[i].split(",");

    // do nothing unless index 1 (team name) matches the given param,
    // if so, push the associated year
    if (target[1] === team) {
      years.push(target[0]);
    }
  }

  // return the array containing all the matching years
  return years;
}

// console.log(solution(data, "Los Angeles Lakers"));
