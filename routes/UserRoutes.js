const express = require("express");
const { getUserInformation, getAllUserInformation, updateUserInformation, deleteUserInformation } = require('../services/UserService');
const wrap = require('../wrapper');

const router = express.Router();

router.get('/', wrap(getAllUserInformation));
router.get('/:uid', wrap(getUserInformation));
router.patch('/:uid', wrap(updateUserInformation));
router.delete('/:uid', wrap(deleteUserInformation));

module.exports = router;