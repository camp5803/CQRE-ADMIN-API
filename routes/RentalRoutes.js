const express = require('express');
const wrap = require('../wrapper');
const { read } = require('../controllers/DelinquentController');
const returnBook = require('../controllers/RentalController');

const router = express.Router();

router.get('/delinquency', read);
router.delete('/delinquency/:uid', returnBook);

module.exports = router;