const express = require('express');
const wrap = require('../wrapper');
const { File } = require('../models');

const router = express.Router();

router.delete('/:fid', async (req, res) => {
    const data = await File.findOne({
        where: { file_id: req.params.fid },
        raw: true
    });

    if (data === null) {
        return res.status(400).json({
            status: "error",
            message: "Content not found in this parameter."
        });
    } else {
        await File.destroy({
            where: { file_id: req.params.fid }
        });
        return res.json({ status: "success" });
    }
});

module.exports = router;