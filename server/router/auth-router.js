const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth-controller');
router.route('/').get(authcontroller.home)
router.route('/register').get(authcontroller.register)

module.exports = router;