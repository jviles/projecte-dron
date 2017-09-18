const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name:String,
  drone_name:String,
  level: Number,
  points: Number,
  drone_description: String,
  races_id: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
