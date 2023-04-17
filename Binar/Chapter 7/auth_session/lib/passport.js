const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const {
  User
} = require("../models");

const authenticate = async (username, password, done) => {
  try {
    const user = await User.authenticate({
      username,
      password
    });
    // console.log(user);
    return done(null, user);
  } catch (error) {
    // console.log(error);
    return done(null, false, {
      message: error
    });
  }

};

passport.use(
  new localStrategy({
    usernameField: "username",
    passwordField: "password"
  }, authenticate)
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => done(null, await User.findByPk(id)));

module.exports = passport;