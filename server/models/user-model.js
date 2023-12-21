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
        const hash_password = await bcrypt.hash(password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }

})

// json web token
// Tokens such as JWTs  are typically not stored in the database along with other user details. Instead, they are issued by the server during the authentication process and then stored on the client-side e.g in local storage, cookies.
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

/* What is JWT
JSON Web Tokens (JWT) is an open standard that defines a compact and self contained way for securely transmitting information between parties as a JSON object.
** JWTs are often used for authentication and authorization in web application
1.Authentication: Verifying the identity of a user or client.
2.Authorization : Determining what actions a user or client is allowed to perform.

// Components of a JWT:
1.Header: contains metadata about the token, such as the type of token and the signing algorithm being used.
2.Payload: Contains claims or statements about an entity (typically the user) and additional data. common claims include userID, username, and expiration time.
3.Signature: to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is included in the JWT
A signature is a cryptographically generated value that is used to verify the integrity of the token



*/

