const {User} = require('../models');
const { map, filter } = require('../fp');

const getUserInformation = async (req, res) => {
    const user = await User.findOne({
        where: { user_id: req.params.uid },
        raw: true
    });

    return res.json({ success: true, user });
}

const getAllUserInformation = async (req, res) => {
    const user = await User.findAll({
        order: [['user_id', 'ASC']],
        raw: true,
        /*
        limit: 20, offset: 20 * (req.params.page - 1)
        */
    });

    return res.json({ success: true, user });
}

const updateUserInformation = async (req, res) => {
    await User.update(req.body, {
        where: { user_id: req.params.uid }
    });

    return res.json({ success: true });
}

const deleteUserInformation = async (req, res) => {
    await User.destroy({
        where: { user_id: req.params.uid }
    });

    return res.json({ success: true });
}

module.exports = {
    getUserInformation,
    getAllUserInformation,
    updateUserInformation,
    deleteUserInformation
}