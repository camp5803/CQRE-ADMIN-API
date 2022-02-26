const express = require('express');
const wrap = require('../wrapper');
const { create, addMember, destroy, destroyMember } = require('../controllers/ProjectController');
const { isAuthenticated, isAdmin } = require('../controllers/AuthController');

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.post('/', create);
router.post('/:pid/member', addMember);
router.delete('/:pid', destroy);
router.delete('/:pid/member/:uid', destroyMember);

module.exports = router;