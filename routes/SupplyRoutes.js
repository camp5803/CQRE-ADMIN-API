const express = require('express');
const wrap = require('../wrapper');
const { create, read, update, destroy } = require('../controllers/SupplyController');
const { isAuthenticated, isAdmin } = require('../controllers/AuthController');

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.get('/', wrap(read));
router.post('/', wrap(create));
router.patch('/:sid', wrap(update));
router.delete('/:sid', wrap(destroy));

module.exports = router;