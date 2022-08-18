const { readFileSync } = require("fs");
const { join } = require("path");
const contents = readFileSync(join(__dirname, "nba_finals.csv"), {
  encoding: "utf-8",
});

const csvFile = contents.split("\r\n");
// console.log(csvFile);

// //this does not work because you cant split here b/c it is a : string[]
// const arrOfArr = csvFile.split(",");
// console.log(arrOfArr);

const eachElement = csvFile.forEach((element) => {
  //   console.log(element);

  //this places everySingle str into an arr
  const splitLineElement = element.split(",");
  //   console.log(splitLineElement);

  const arr = [splitLineElement];
  //   console.log(arr);

  //   splitLineElement = [splitLineElement];
  //   console.log(splitLineElement);

  //this turns each 'arr' into an arr w/ an obj.
  //I know this isn't the best way but I cant figure out how to loop through the string with an array "String[]"
  const arrayObjects = arr.map((item) => {
    return {
      year: item[0],
      champion: item[1],
      runnerUp: item[2],
      seriesRecord: item[3],
      finalsMvp: item[4],
    };
  });
  console.log(arrayObjects);

  //     //this doesn't work yet, just messing w/ it
  //     function findChampionByYear(year) {
  //       return (objOfInputedYear = arrayObjects.find((obj) => obj.year === year));
  //     }
  //     console.log(findChampionByYear(2011));
});

// //just test shit
// const arrOfArrs = () => {
//   const everyElement = csvFile.forEach((element) => {
//     console.log(element);
//     const splitLineElement = element.split(",");
//     console.log(splitLineElement);
//   });
// };
