const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { image, caption, userId } = req.body;
    const newPost = await Post.create({ image, caption, user: userId });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeed = async (req, res) => {
  const posts = await Post.find().populate('user').sort({ createdAt: -1 });
  res.json(posts);
};

exports.getUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.params.id }).sort({ createdAt: -1 });
  res.json(posts);
};
