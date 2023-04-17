var express = require("express");
var router = express.Router();
const restrict = require("../middlewares/restrict");
var histories = require("../controllers/historyController");

router.get("/list", histories.listGame);
router.post("/add", restrict, histories.createGame);
router.get("/history-user-game/:userId", restrict, histories.getUserHistories);
router.get("/history-game/:id", histories.getGameHistories);
router.get("/stats/:id", restrict, histories.userStats);
module.exports = router;
