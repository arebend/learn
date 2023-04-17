const express = require('express');
const router = express.Router();
const restrict = require("../middleware/restrict");

/* GET home page. */
router.get('/', restrict, function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;