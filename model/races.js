const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RaceSchema = new Schema({
  name: String,
  level: Number,
  location: { type: { type: String }, coordinates: [Number] },
  quantity_people: Number,
  price: Number,
  points: Number,
  location: String,
  pilot: Number,
});

RaceSchema.index({ location: '2dsphere' });

const Race = mongoose.model("Race", RaceSchema);
module.exports = Race;
