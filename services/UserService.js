const {User} = require('../models');
const { map, filter } = require('../fp');

const getUserInformation = async (req, res) => {
    const user = await User.findOne({
        where: req.params.uid,
        raw: true
    });

    return res.json(user);
}

const getAllUserInformation = async (req, res) => {
    const user = await User.findAll({
        order: [['user_id', 'ASC']],
        raw: true
    });

    return res.json(user);
}

module.exports = {
    getUserInformation,
    getAllUserInformation
}