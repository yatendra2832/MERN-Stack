const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db')

app.use(express.json());
app.use('/api/auth', router);

const PORT = 5000;
connectDB().then(() => {
    app.listen(5000, () => {
        console.log(`Server is running at PORT ${PORT}`)
    });
})
