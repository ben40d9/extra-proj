function getArrFromCsv(filePath) {
  const { readFileSync } = require("fs");
  const { join } = require("path");
  // const { stringify } = require("querystring");
  const contents = readFileSync(join(__dirname, filePath), {
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
  let arrObj = arrOfObjs.filter((obj) => obj.winner !== "Winner" || null);

  //take out last weird element
  const lastShitElement = arrObj.pop();

  return arrObj;
}
exports.getArrFromCsv = getArrFromCsv;
