const express = require('express');
const wrap = require('../wrapper');
const { deleteComment, deletePost } = require('../controllers/PostController');
const { isAuthenticated, isAdmin } = require('../controllers/AuthController');

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.delete('/post/:pid', deletePost);
router.delete('/comment/:cid', deleteComment);

module.exports = router;