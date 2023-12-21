const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth-controller');
router.route('/').get(authcontroller.home)
router.route('/register').post(authcontroller.register)

module.exports = router;
/*
HTTP methods and their meaning
GET -> Read data
POST -> insert data
PUT or PATCH -> update data
DELETE -> delete data
*/
