const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');

router.route('/users').get(authMiddleware,adminController.getAllUsers);
router.route('/contacts').get(authMiddleware,adminController.getAllContacts);

module.exports = router;