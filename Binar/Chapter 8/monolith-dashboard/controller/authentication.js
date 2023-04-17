const loginView = (req, res) => {
   res.render("pages/login", {
      layout: "layout/authentication"
   });
};

const registerView = (req, res) => {
   res.render("pages/register", {
      layout: "layout/authentication"
   });
}

const register = (req, res, next) => {
   User.register(req.body)
   //   .then(() => res.redirect("/users/login"))
     .catch(err => {
       console.log(err);
       next(err);
     });
 }

module.exports = {
   loginView,
   registerView,
   register
};