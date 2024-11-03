const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema(
  {
    name: { type: String, required: true },
    localisation: { type: String, required: true },
    date: { type: Date, require: true },
    description: { type: String, require: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", event);
