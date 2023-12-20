const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .send('<H1>Welcome to the Authorization router </H1>')
})

router.route('/register').get((req, res) => {
    res
        .status(200)
        .send('<H1>Welcome to the Registration router </H1>')
})

module.exports = router;