const { Book } = require('../models');

const getBookInformation = async (req, res) => {
    const data = await Book.findAll({
        raw: true,
        /*
        limit: 20, offset: 20 * (req.params.page - 1)
        */
    });

    return res.json({ success: true, data });
}

const createBookInformation = async (req, res) =>{
    req.body.remain_amount = req.body.amount;
    await Book.create(req.body);

    return res.json({ success: true });
}

const updateBookInformation = async (req, res) => {
    const data = await Book.findOne({
        where: { book_id: req.params.bid },
        raw: true
    });

    if (req.body.amount !== undefined) {
        req.body.remain_amount = data.remain_amount - (data.amount - req.body.amount);
    }

    await Book.update(req.body, {
        where: { book_id: req.params.bid }
    });

    return res.json({ success: true });
}

const deleteBookInformation = async (req, res) => {
    await Book.destroy({
        where: { book_id: req.params.bid }
    });

    return res.json({ success: true });
}

module.exports = {
    getBookInformation,
    createBookInformation,
    updateBookInformation,
    deleteBookInformation
}