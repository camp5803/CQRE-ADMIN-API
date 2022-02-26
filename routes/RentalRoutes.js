const express = require('express');
const wrap = require('../wrapper');
const { read } = require('../controllers/DelinquentController');
const returnBook = require('../controllers/RentalController');
const { isAuthenticated, isAdmin } = require('../controllers/AuthController');

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.get('/delinquency', read);
router.delete('/delinquency/:uid', returnBook);

module.exports = router;