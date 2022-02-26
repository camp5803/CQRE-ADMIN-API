const { Notification, User } = require('/models');
const { Op, literal } = require('sequelize');
const { map } = require('../fp');

const createNotification = async (req, res) => {
    const data = await User.findAll({
        where: {
            user_type: {
                [Op.not]: 'Admin'
            }
        },
        raw: true
    });

    const user = map(a => a.user_id, data);
    const userNotificationDto = [];
    const result = [];
    const err = [];

    for (const uid of user) {
        userNotificationDto.push({
            receiver_id: uid,
            sender_id: 35, // 임시로 넣은거임 닉네임이 CQRE나 Admin과 같은 계정 생기면 그 UID 넣으면 됨
            not_type: req.body.type,
            not_post: req.body.post_id,
            not_content: req.body.content,
            not_datetime: literal('CURRENT_TIMESTAMP'),
            whether: false
        });
    }

    Array.from(userNotificationDto).forEach(a => {
        Notification.create()
            .then((res) => {
                result.push(res);
            })
            .catch(e => {
                err.push(e);
            })
    })

    if (err.length !== 0) {
        return res.json({
            status: "success",
            result
        });
    } else {
        return res.status(400).json({
            status: "error",
            result,
            err
        });
    }
}

const getNotificationFromAdmin = async (req, res) => {
    const data = await Notification.findAll({
        where: { sender_id: 35 }, // 임시로 넣은거임 닉네임이 CQRE나 Admin과 같은 계정 생기면 그 UID 넣으면 됨
        raw: true
    });

    return res.json({
        status: "success",
        data
    });
}

module.exports = {
    create: createNotification,
    read: getNotificationFromAdmin
}