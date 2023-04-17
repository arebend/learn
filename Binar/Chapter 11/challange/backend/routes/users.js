var express = require("express");
var router = express.Router();
const auth = require("../controllers/authControllers");
const restrict = require("../middlewares/restrict");

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/whoami", restrict, auth.whoami);
router.get("/detail/:id", restrict, auth.userDetail);
router.post("/update/:id", restrict, auth.updateProfile);

module.exports = router;
