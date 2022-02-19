const express = require("express");
const { getUserInformation, getAllUserInformation } = require('../services/UserService');

const router = express.Router();

router.get('/', getAllUserInformation);
router.get('/:uid', getUserInformation);

module.exports = router;