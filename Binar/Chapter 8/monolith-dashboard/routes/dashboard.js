const express = require('express');
const router = express.Router();
const dashboardController = require("../controller/dashboard");

router.get('/post', dashboardController.postView);
router.get('/', dashboardController.dashboardView);


module.exports = router;