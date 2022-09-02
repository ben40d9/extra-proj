const { convict } = require("convict");

// define config schema here.
// https://github.com/mozilla/node-convict/tree/master/packages/convict#usage

//---
//benTry
//---
// have to npm install convict-format-with-validator
// var config = convict({
//   env: {
//     doc: "The application environment.",
//     format: ["production", "development", "test"],
//     default: "development",
//     env: "NODE_ENV",
//   },
//   ip: {
//     doc: "The IP address to bind.",
//     format: "ipaddress",
//     default: "127.0.0.1",
//     env: "IP_ADDRESS",
//   },
//   port: {
//     doc: "The port to bind.",
//     format: "port",
//     default: 8080,
//     env: "PORT",
//     arg: "port",
//   },
// });

// var config = convict({
//   db: {
//     name: {
//       format: String,
//       default: "",
//     },
//     synchro: {
//       active: {
//         format: "Boolean",
//         default: false,
//       },
//       remote_url: {
//         format: "url",
//         default: "http://localhost:8080/",
//       },
//     },
//   },
// });
