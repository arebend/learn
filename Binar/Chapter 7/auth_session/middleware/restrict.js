module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    // console.log(req.user);
    return next();
  }
  res.redirect('/users/login');
}