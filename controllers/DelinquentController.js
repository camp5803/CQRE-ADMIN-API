const { Delinquent } = require('../models');

const getDelinquents = async (req, res) => {
    const data = await Delinquent.findAll({
        raw: true
    });

    return res.json(data);
}

module.exports = {
    read: getDelinquents
}