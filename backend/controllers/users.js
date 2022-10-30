const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err.message);
    }
};

exports.getUserById = async (req, res, next) =>{
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err.message);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        await User.create(req.body);
        res.status(201).json("User created successfully")
    } catch(err) {
        res.status(500).json(err.message);
    }
};

exports.updateUser = async(req, res, next) => {
    try {
        const user = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("Update user successfully");
    } catch(err) {
        res.status(500).json(err.message);
    }
};

exports.deleteUser = async(req, res, next) => {
    try {   
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("User deleted successfully");
    } catch(err) {
        res.status(500).json(err.message);
    }
}