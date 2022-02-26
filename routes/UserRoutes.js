const express = require("express");
const wrap = require('../wrapper');
const { read, readAll, update, destroy } = require('../controllers/UserController');
const { isAuthenticated, isAdmin } = require('../controllers/AuthController');

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.get('/', wrap(readAll));
router.get('/:uid', wrap(read));
router.patch('/:uid', wrap(update));
router.delete('/:uid', wrap(destroy));

module.exports = router;