const { convict } = require('convict');
const options = {
  ...userOptions,
}

const buildOptions = userOptions => convict({

});

dev: {
  // logger options. see https://github.com/pinojs/pino/blob/master/docs/api.md#options
  logger: {
    transport: {
        ...userTransport,
        target: 'pino-pretty',
      },
  }
},
prod: {

}
module.exports = {
  buildOptions,
}


