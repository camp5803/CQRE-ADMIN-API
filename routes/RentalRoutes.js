const express = require('express');
const wrap = require('../wrapper');
const { read } = require('../controllers/DelinquentController');

const router = express.Router();

router.get('/delinquency', read);

module.exports = router;