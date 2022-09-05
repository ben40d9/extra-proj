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

const gitEmailEnvironment = config.get("git.email");
console.log(gitEmailEnvironment);

// for .env file since i cant comment: https://github.com/motdotla/dotenv
