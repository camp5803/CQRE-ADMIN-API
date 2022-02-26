const { Supply } = require('../models');

const getSupplyInformation = async (req, res) => {
    const data = await Supply.findAll({
        raw: true,
        /*
        limit: 20, offset: 20 * (req.params.page - 1)
        */
    });

    return res.json({ status: "success", data });
}

const createSupplyInformation = async (req, res) => {
    await Supply.create(req.body);

    return res.json({ status: "success" });
}

const updateSupplyInformation = async (req, res) => {
    await Supply.update(req.body, {
        where: { supply: req.params.sid }
    });

    return res.json({ status: "success" });
}

const deleteSupplyInformation = async (req, res) => {
    const data = await Supply.findOne({
        where: { supply: req.params.sid }
    });

    if (data === null) {
        return res.status(400).json({
            status: "error",
            message: "Content not found in this parameter."
        });
    } else {
        await Supply.destroy({ where: { supply: req.params.sid }});
        return res.json({ status: "success" });
    }
}

module.exports = {
    create: createSupplyInformation,
    read: getSupplyInformation,
    update: updateSupplyInformation,
    destroy: deleteSupplyInformation
}