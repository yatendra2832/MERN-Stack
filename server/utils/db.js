const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/mern_admin';
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connected successfully")
    } catch (error) {
        console.error("Database connection Failed : ", error);
        process.exit(0);

    }
}

module.exports = connectDB;