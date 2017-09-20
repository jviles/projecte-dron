const mongoose = require("mongoose");
const User = require("../model/user");
const Schema   = mongoose.Schema;

const RaceSchema = new Schema({
  name: String,
  level: Number,
  price: Number,
  given_points: Number,
  quantity_people: Number,
  date: Date,
  time: Date,
  location: { type: { type: String }, coordinates: [Number] },
  pilots_attending: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

RaceSchema.index({ location: '2dsphere' });

const Race = mongoose.model("Race", RaceSchema);

module.exports = Race;
