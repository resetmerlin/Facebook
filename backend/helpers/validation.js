const User = require("../models/User");

exports.validateEmail = (email) => {
  // So like every email, you know, like has a certain global form that you see is and you know that this
  //   So we're going to make sure using regex that this is the form of the email.
  ///need to know about Regex

  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
  // ?== means optional part
};

exports.validationLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

exports.validateUsername = async (username) => {
  let a = false;
  do {
    let check = await User.findOne({ username });
    if (check) {
      //change username

      username += (+new Date() * Math.random()).toString().substring(0, 1);

      a = true;
    } else {
      a = false;
    }
  } while (a);
  return username;
};
