const express = require('express');
const wrap = require('../wrapper');
const { read, destroy, create, update } = require('../controllers/BookController');

const router = express.Router();

router.get('/', wrap(read));
router.post('/', wrap(create));
router.patch('/:bid', wrap(update));
router.delete('/:bid', wrap(destroy));

module.exports = router;