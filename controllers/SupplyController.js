const { Supply } = require('../models');

const getSupplyInformation = async (req, res) => {
    const data = await Supply.findAll({
        raw: true,
        /*
        limit: 20, offset: 20 * (req.params.page - 1)
        */
    });

    return res.json({ success: true, data });
}

const createSupplyInformation = async (req, res) => {
    await Supply.create(req.body);

    return res.json({ success: true });
}

const updateSupplyInformation = async (req, res) => {
    await Supply.update(req.body, {
        where: { supply: req.params.sid }
    });

    return res.json({ success: true });
}

const deleteSupplyInformation = async (req, res) => {
    await Supply.destroy({ where: { supply: req.params.sid }});

    return res.json({ success: true });
}

module.exports = {
    create: createSupplyInformation,
    read: getSupplyInformation,
    update: updateSupplyInformation,
    destroy: deleteSupplyInformation
}