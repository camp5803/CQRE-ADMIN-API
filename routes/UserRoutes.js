const express = require("express");
const wrap = require('../wrapper');
const { read, readAll, update, destroy } = require('../controllers/UserController');

const router = express.Router();

router.get('/', wrap(read));
router.get('/:uid', wrap(readAll));
router.patch('/:uid', wrap(update));
router.delete('/:uid', wrap(destroy));

module.exports = router;