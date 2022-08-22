// const str = "Kamran";
// let arr = [];
// let k = 0;
// for (let i of str) {
//   arr[k++] = i;
// }
// console.log(arr);

// var obj = [
//   { name: "Max", age: 23 },
//   { name: "John", age: 20 },
//   { name: "Caley", age: 18 },
// ];

// Object.keys(obj).forEach((key) => console.log(obj[key]));

let students = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];

/* Applying filter function on students array to
 retrieve those students Objects who play 
 basketball and then the new array returned by
 filter method is mapped in order to get the name
 of basketball players instead of whole object.*/
let basketballPlayers = students
  .filter(function (student) {
    return student.sports === "Basketball";
  })
  .map(function (student) {
    return student.name;
  });

console.log("Basketball Players are:");

// Printing out the name of Basketball players
basketballPlayers.forEach(function (players) {
  console.log(players);
});
