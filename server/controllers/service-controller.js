const Services = require('../models/service-model');

const services = async (req, res) => {
    try {
        const response = await Services.find();
        if (!response) {
            res.status(404).json({ msg: "Services not found" })
        }
        res.status(200).json({ data: response })
    } catch (error) {
        console.log(`Services : ${error}`)
    }
}

module.exports = services;