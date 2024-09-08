const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  selectedTopics: [String],
  score: { type: Number, default: 0 },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
