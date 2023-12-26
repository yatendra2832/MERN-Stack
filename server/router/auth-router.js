const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth-controller');
const signupSchema = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');
router.route('/').get(authcontroller.home)
router.route('/register').post(validate(signupSchema), authcontroller.register)
router.route('/login').post(authcontroller.login)
router.route('/user').get(authMiddleware, authcontroller.user)

module.exports = router;

