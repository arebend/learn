var express = require('express');
var router = express.Router();
const auth = require("../controllers/authController");
const restrict = require('../middleware/restrict');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", auth.register);
router.get("/register", auth.registerForm);
router.post("/login", auth.login);
router.get("/login",auth.loginForm);
router.get("/whoami", restrict, auth.whoami);

module.exports = router;