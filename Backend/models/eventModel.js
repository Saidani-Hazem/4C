const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema(
  {
    name: { type: String, required: true },
    localisation: { type: String, required: true },
    date: { type: String, require: true },
    description: { type: String, required: false },
    image: { type: String, required: false }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", event);