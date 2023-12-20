const express = require('express');
const app = express();
const router = require('./router/auth-router');

app.use('/api/auth', router);

const PORT = 5000
app.listen(5000, () => {
    console.log(`Server is running at PORT ${PORT}`)
})