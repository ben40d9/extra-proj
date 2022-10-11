//how to access shell environment variables from node

//process is the info about process while the process is running
// const env_vars = process.env;
// console.log(env_vars);
// node convict does this and then some for us

//HOW TO SET environment variables
// from shell:  1. MY_ENV_VAR=poop node envvar.js
// from node :  2. process.env.MY_ENV_VAR = "pee"
// from .env file: 3. dotenv package (there is a pkg called .env)

const config = require("./config");
// console.log(config);

// const dotenv = require("dotenv");

const pathToTheGlory = require("dotenv").config({
  path: "/Users/benpaley/.volta/bin/config",
});
console.log(pathToTheGlory);

// console.log(process.env);

//parses the contents of your file containing environment variables
//it accepts a string of buffer and will return an obj w/ the parsed keys and values
// const buf = Buffer.from("USERNAME:user-name");
// const objectFromBuf = dotenv.parse(buf);
// console.log(typeof objectFromBuf, objectFromBuf);

// const pathToFindCreds = process.env.PATH;
// console.log(pathToFindCreds.get("config user.name"));

// const gitEmailEnvironment = config.get("git.email");
// console.log(gitEmailEnvironment);

// for .env file since i cant comment: https://github.com/motdotla/dotenv
