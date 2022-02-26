const express = require('express');
const wrap = require('../wrapper');
const { deleteComment, deletePost } = require('../controllers/PostController');

const router = express.Router();

router.delete('/post/:pid');
router.delete('/comment/:cid');

module.exports = router;