const express = require('express');
const router = express.Router();
const auth = require("../controller/authentication");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", auth.register);


module.exports = router;
