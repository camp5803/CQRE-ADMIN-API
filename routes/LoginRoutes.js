const express = require('express');
const wrap = require('../wrapper');
const { getToken } = require('../controllers/LoginController');

const router = express.Router();

router.post('/', getToken);

module.exports = router;