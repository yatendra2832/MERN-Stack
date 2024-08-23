require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();


const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRoute = require('./router/service-router');
const adminRoute = require('./router/admin-router');


const connectDB = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware');

var corsOptions = {
    origin: 'https://mern-stack-ihux.onrender.com',
    method: "GET, POST, PATCH, DELETE, PUT, HEAD",
    credentials: true,
}

app.use(express.json());
app.use(cors(corsOptions));



app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);
app.use('/api/admin', adminRoute);// let's define the admin panel route

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
    app.listen(5000, () => {
        console.log(`Server is running at PORT ${PORT}`)
    });
})
