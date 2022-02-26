const { Post, Comment } = require('../models');

const deletePost = async (req, res) => {
    await Post.destroy({
        where: { post_id: req.params.pid }
    });

    return res.json({ success: true });
}

const deleteComment = async (req, res) => {
    await Comment.destroy({
        where: { comment_id: req.params.cid }
    });

    return res.json({ success: true });
}

module.exports = {
    deletePost,
    deleteComment
}