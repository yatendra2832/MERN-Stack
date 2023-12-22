const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// Secure the password with the bcrypt
userSchema.pre('save', async function (next) {
    // console.log("Pre Method:", this);
    const user = this;
    if (!user.isModified('password')) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSaltSync(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }

})

// Compare password
userSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        console.error(error);
    }
}

// Generate Token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '1d'
            }
        )
    } catch (error) {
        console.error(error);
    }
}


// define the model or the collection name
const User = mongoose.model('User', userSchema);

module.exports = User;


