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

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" })
        }

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        })
        res
            .status(201)
            .json({
                msg: "User Registration Successfully",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString()
            })
    } catch (error) {
        res.status(500).json({ msg: "internal Server Error" })
    }
}

module.exports = { home, register }