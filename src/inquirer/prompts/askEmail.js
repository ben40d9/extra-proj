// describe the question prompt object we will use to ask the user their email.
// in some other file, we will import "prompt.js" as well as this question,
// and feed one into the other.

const askEmail = {
  // https://github.com/SBoudrias/Inquirer.js#objects
  // there should be an input question object here.

  type: "input",
  message: "What is your email address?",
  name: "email",
  validate: function (email) {
    // Regex mail check (return true if valid mail)
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    );
  },
};
