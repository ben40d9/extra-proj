// Here we're going to use https://github.com/pinojs/pino.
// It's a very powerful logger - like console.log but with superpowers.
// We set it up with a "transport" - which in logging means a place that logs get sent.
// Could be a logging database, a filtering engine that emails you when stuff breaks, 
// or like here, we just want to have really nice custom logs since this is a cli
// and its output is constantly read by humans.
const { pino } = require('pino');
// You're going to run into different problems parsing a csv than you would
// trying to parse something different like an HTML table.
// We'd like to identify the common error cases in parsing each filetype and 
// make some class methods for each filetype's logger.

// Each one of those loggers should "extend" the following
// class, which holds data and methods common to all loggers.
// Our logger class will need an instance of pino to work, 
// so we'll ensure it gets it by setting a default prop.
class BaseLogger {
  static env = process.env.NODE_ENV;

  // this is called a property declaration:
  // it doesn't need const or let, and you can also use 
  // default props if you want. Out "core" property on
  // the BaseLogger class will be a the instance of pino
  // from the top of the file.
  // note: this doesn't get set until there's an open spot for it.
  core = pinoInstance;

  constructor() {
    this.core = pinoInstance({
    });
  }
}



