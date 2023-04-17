var express = require("express");
var router = express.Router();
var games = require("../controllers/gameControllers");
const restrict = require("../middlewares/restrict");

router.get("/list-top-game", games.listTopGame);
router.get("/list", games.listGame);
router.post("/add", restrict, games.createGame);
router.get("/detail/:id", games.gameDetail);

module.exports = router;
