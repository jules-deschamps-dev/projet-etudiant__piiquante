const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: false },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked:  [{ type: String }],
  usersDisliked:  [{ type: String }],
  userId: { type: String, required: false }
});

module.exports = mongoose.model('Sauce', sauceSchema);