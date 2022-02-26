const { Post, Comment } = require('../models');

const deletePost = async (req, res) => {
    await Post.destroy({
        where: { post_id: req.params.pid }
    });

    return res.json({ status: "success" });
}

const deleteComment = async (req, res) => {
    const data = await Comment.findOne({
        where: { comment_id: req.params.cid }
    });

    if (data === null) {
        return res.status(400).json({
            status: "error",
            message: "Content not found in this parameter."
        });
    } else {
        await Comment.destroy({
            where: { comment_id: req.params.cid }
        });
        return res.json({ status: "success" });
    }
}

module.exports = {
    deletePost,
    deleteComment
}