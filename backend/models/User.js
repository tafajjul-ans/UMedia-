const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email:    { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bio:      String,
  avatar:   String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
