const express = require('express');
const wrap = require('../wrapper');
const { getBookInformation, deleteBookInformation, createBookInformation, updateBookInformation } = require('../services/BookService');

const router = express.Router();

router.get('/', getBookInformation);
router.post('/', createBookInformation);
router.patch('/:bid', updateBookInformation);
router.delete('/:bid', deleteBookInformation);

module.exports = router;