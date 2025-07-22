
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({ username, email, password: hash });
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Wrong password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.json({ token, user });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).populate('followers').populate('following');
  res.json(user);
};

exports.followUser = async (req, res) => {
  const currentUser = await User.findById(req.body.myId);
  const userToFollow = await User.findById(req.params.id);
  if (!currentUser.following.includes(userToFollow._id)) {
    currentUser.following.push(userToFollow._id);
    userToFollow.followers.push(currentUser._id);
    await currentUser.save();
    await userToFollow.save();
  }
  res.json({ message: 'Now following' });
};
  
