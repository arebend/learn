const {
  User
} = require("../models");
const passport = require('../lib/passport');


const register = (req, res, next) => {
  User.register(req.body)
    .then(() => res.redirect("/users/login"))
    .catch(err => {
      console.log(err);
      next(err);
    });
}

const registerForm = (req, res, next) => {
  res.render("register")
}

const login = (req, res, next) => {
  User.authenticate(req.body)
    .then(user => {
      res.json({
        id: user.id,
        username: user.username,
        accessToken: user.generateToken()
      })
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
}

const loginForm = (req, res, next) => {
  res.render("login")
}

const whoami = (req, res, next) => {
  const currentUser = req.user;
  res.json({
    id: currentUser.id,
    username: currentUser.username
  })
}

module.exports = {
  register,
  registerForm,
  login,
  loginForm,
  whoami
};