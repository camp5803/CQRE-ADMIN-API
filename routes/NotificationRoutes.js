const express = require('express');
const wrap = require('../wrapper');
const { create, read } = require('../controllers/NotificationController');
const { isAuthenticated, isAdmin } = require('../controllers/AuthController');

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.get('/', read);
router.post('/', create);

module.exports = router;