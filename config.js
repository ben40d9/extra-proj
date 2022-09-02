const { convict } = require("convict");

// define config schema here.
// https://github.com/mozilla/node-convict/tree/master/packages/convict#usage

//---
//benTry
//---
// have to npm install convict-format-with-validator
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  gh: {
    email: {},
  },
});
