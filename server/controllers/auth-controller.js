const User = require('../models/user-model')
const bcrypt = require('bcryptjs')

// *--------------------------------------------
// Home Logic
// *--------------------------------------------
const home = async (req, res) => {
    try {
        res.status(200).send('<H1>Welcome to the Authorization router using controller </H1>')
    } catch (error) {
        res.status(400).send({ msg: "Page not found" })
    }
}
// *--------------------------------------------
// Registration Logic
// *--------------------------------------------
/*
1. Get Registration Data : Retrieve user data(username, email, password) from the request body
2. Check Email existence : Check if the email already exists in the database
3.Hash Password: security hash the password.
4. create User : Create a new user in the database with the hashed password
5.Save to DB : save user data to the database.
6. Send Response : Respond with the  "Registration Successful"  or handle the error 
*/
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" })
        }

        // Hash Password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        })
        res
            .status(201)
            .json({
                msg: userCreated,
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString()
            })
    } catch (error) {
        res.status(500).json({ msg: "internal Server Error" })
    }
}

module.exports = { home, register }