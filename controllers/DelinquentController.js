const { Delinquent } = require('../models');

const getDelinquents = async (req, res) => {
    const data = await Delinquent.findAll({
        raw: true
    });

    return res.json({ status: "success", data });
}

module.exports = {
    read: getDelinquents
}