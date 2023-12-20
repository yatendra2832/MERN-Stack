// In an Express.js application, a controller refer to a part of your code that is responsible for handling application logic. Controllers are typically used to process incoming requests, interact with data and services, and return responses. Controllers are used to make the application more modular and easier to maintain.
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
        res
            .status(200)
            .send('<H1>Welcome to the Registration router using the controller </H1>')
    } catch (error) {
        res.status(400).send({ msg: "Page not found" })
    }
}

module.exports = { home, register }