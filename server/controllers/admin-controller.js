const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        // console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        return res.status(200).json({ users });
    } catch (error) {
        next(error);
    }
}

// Single user logic
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 })
        // console.log(`getUserById data: ${data}`);
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

// update Logic
const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.updateOne({ _id: id }, { $set: req.body });
        return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        next(error)
    }
}

// users delete logic
const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.deleteOne({ _id: id });
        return res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

// Get all contacts logic
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: 'No contacts found' });
        }
        return res.status(200).json({ contacts });
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById };