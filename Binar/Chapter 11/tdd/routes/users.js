var express = require('express');
var router = express.Router();
const userController = require("../controllers/userControllers");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", userController.createUser)

module.exports = router;
