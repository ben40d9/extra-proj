const str = "Kamran";
let arr = [];
let k = 0;
for (let i of str) {
  arr[k++] = i;
}
console.log(arr);

var obj = [
  { name: "Max", age: 23 },
  { name: "John", age: 20 },
  { name: "Caley", age: 18 },
];

Object.keys(obj).forEach((key) => console.log(obj[key]));
