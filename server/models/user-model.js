const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
userSchema.pre('save', async function () {
    // console.log("Pre Method:", this);
    const user = this;
    if (!user.isModified('password')) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSaltSync(10);
        const hash_password = await bcrypt.hash(password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }

})

// define the model or the collection name
const User = mongoose.model('User', userSchema);

module.exports = User;