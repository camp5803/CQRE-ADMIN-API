const { Rental, Delinquent } = require('../models')

const returnBook = async (req, res) => {
    const data = await Rental.findOne({
        where: { user_id: req.params.uid },
        raw: true
    });
    const now = new Date();

    if (now > data.return_at) {
        Delinquent.create({
            user_id: req.params.uid,
            expiry_date: new Date(now.getTime() + (now.getTime() - data.return_at.getTime()))
        });
    }

    Rental.destroy({
        where: { user_id: req.params.uid }
    });

    return res.json({ status: "success" });
}

module.exports = returnBook;