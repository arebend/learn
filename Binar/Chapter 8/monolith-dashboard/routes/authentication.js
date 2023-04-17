const express = require('express');
const router = express.Router();
const authController = require("../controller/authentication");

router.get('/login', authController.loginView);
router.get('/register', authController.registerView);



module.exports = router;