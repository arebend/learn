const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexControllers');

router.get('/', indexController.home);
router.get('/about', indexController.about);
router.get('/faq', indexController.faq);


module.exports = router;
