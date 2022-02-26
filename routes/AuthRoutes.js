const express = require('express');
const wrap = require('../wrapper');
const { create, isAuthenticated } = require('../controllers/AuthController');

const router = express.Router();

router.post('/login', create);
router.get('/', isAuthenticated);

module.exports = router;