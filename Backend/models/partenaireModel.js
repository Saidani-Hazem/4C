const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partenaire = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    image_url:{type: String, required: true}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("partenaire", partenaire);
