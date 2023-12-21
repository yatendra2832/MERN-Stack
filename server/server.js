const express = require('express');
const app = express();
const router = require('./router/auth-router');

app.use(express.json());
// This line of code adds express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle the JSON data in the request body. The middleware is responsible for parsing the JSON data in the request body and it should be applied at the beginning of the middleware stack to ensure that the data is parsed before any other middleware.

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use('/api/auth', router);

const PORT = 5000
app.listen(5000, () => {
    console.log(`Server is running at PORT ${PORT}`)
})