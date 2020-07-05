let mongoose = require("mongoose");
let Wether = new mongoose.Schema({
  name: {
    type: String,
  },
  temp: {
    type: Number,
  },
  date: {
    type: Date,
  },
});
module.exports = mongoose.model("wether", Wether);
