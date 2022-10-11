const { prompt: _prompt } = require('inquirer');

function prompt(inquiry) {
  _prompt(inquiry)
    .then((response) => {
      // do something with user's response:
      // set email to config, etc etc.
      // the logic that does whatver you do with the response
      // should not live in this file.
      // you should take that response and - if it's config values we're dealing with,
      // send them to a config service that can write those values into config for us-
      // just not in this file since this file is strictly for prompting with a whole other 
      // library that is separate from config.
      console.log('nice');
    })
}
