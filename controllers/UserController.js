const {User} = require('../models');
const { map, filter } = require('../fp');

const getUserInformation = async (req, res) => {
    const user = await User.findOne({
        where: { user_id: req.params.uid },
        raw: true
    });

    return res.json({ status: "success", user });
}

const getAllUserInformation = async (req, res) => {
    const user = await User.findAll({
        order: [['user_id', 'ASC']],
        raw: true,
        /*
        limit: 20, offset: 20 * (req.params.page - 1)
        */
    });

    return res.json({ status: "success", user });
}

const updateUserInformation = async (req, res) => {
    await User.update(req.body, {
        where: { user_id: req.params.uid }
    });

    return res.json({ status: "success" });
}

const deleteUserInformation = async (req, res) => {
    const data = await User.findOne({
        where: { user_id: req.params.uid }
    });

    if (data === null) {
        return res.status(400).json({
            status: "error",
            message: "Content not found in this parameter."
        });
    } else {
        await User.destroy({
            where: { user_id: req.params.uid }
        });
        return res.json({ status: "success" });
    }
}

module.exports = {
    read: getUserInformation,
    readAll: getAllUserInformation,
    update: updateUserInformation,
    destroy: deleteUserInformation
}