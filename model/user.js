const mongoose = require('mongoose');
const Race  = require("../model/race");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name:String,
  drone_name:String,
  level: Number,
  points: Number,
  drone_description: String,
  races_id: [{type: Schema.Types.ObjectId, ref: 'Race'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
