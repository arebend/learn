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

const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/users/login",
  failureFlash: true
})

// const login = (req,res,next) =>{ 
//   console.log('req......');
// }

const loginForm = (req, res, next) => {
  res.render("login")
}

const whoami = (req, res, next) => {
  res.render("profile", req.user.dataValues);
}

module.exports = {
  register,
  registerForm,
  login,
  loginForm,
  whoami
};