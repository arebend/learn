const express = require('express');
const router = express.Router();
const indexController = require("../controller/index");

router.get('/', indexController.homeView);
router.get('/xxx', (req, res) => {
  xxx
});

router.use(indexController.notFoundView);
router.use(indexController.errorView);


module.exports = router;