const { Delinquent } = require('../models');
const { map, filter } = require('../fp');
const { Op } = require('sequelize');

const now = new Date();

const getDelinquents = async () => {
    return await Delinquent.findAll({
        raw: true
    });
}

const usersToBeDeleted = async () => {
    return map(a => a.user_id,
        filter(a => now > a.expiry_date,
            await getDelinquents()));
}

(async () => {
    await Delinquent.destroy({
        where: { user_id: { [Op.in]: await usersToBeDeleted() } }
    });
})();