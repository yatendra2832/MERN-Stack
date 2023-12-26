const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res
            .status(401)
            .json({ msg: 'No token, authorization denied' });
    }
    // Assuming token in the form of the format 'Bearer token' <jwt token> Removing the bearer prefix>"
    const jwtToken = token.replace('Bearer ', '').trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log(isVerified);

        const userData = await User
            .findOne({ _id: isVerified.userId })
            .select({
                password: 0,
            });
        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        next();

    } catch (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }


}

module.exports = authMiddleware;