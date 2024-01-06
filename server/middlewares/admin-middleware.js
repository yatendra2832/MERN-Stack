const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            alert('usernot an admin');
            return res.status(403).json({ message: 'Unauthorized, User not an admin' })
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = adminMiddleware;