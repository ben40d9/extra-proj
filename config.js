const convict = require("convict");

// define config schema here.
// https://github.com/mozilla/node-convict/tree/master/packages/convict#usage

//---
//benTry
//---
// have to npm install convict-format-with-validator
var config = convict({
  cli_environment: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },

  git: {
    email: {
      doc: "Your git email",
      default: null,
      env: "GIT_EMAIL",
    },
    userName: {
      doc: "Your git username",
      default: null,
      env: "GIT_USERNAME",
    },
  },
});

// Load environment dependent configuration
var cli_environment = config.get("cli_environment");
config.loadFile("./config/" + cli_environment + ".json");

// // Perform validation
// config.validate({allowed: 'strict'});

module.exports = config;
