const mongoose = require("mongoose");
const User = require("../model/user");
const Schema   = mongoose.Schema;

const RaceSchema = new Schema({
  name: String,
  level: Number,
  location: { type: { type: String }, coordinates: [Number] },
  quantity_people: Number,
  price: Number,
  points: Number,
  pilots: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

RaceSchema.index({ location: '2dsphere' });

const Race = mongoose.model("Race", RaceSchema);

module.exports = Race;
