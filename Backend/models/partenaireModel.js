const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partenaire = new Schema(
  {
    name: { type: String, required: true },
    image:{type: String, required: true},
    contact:{
      partname:{type:String},
      phone:{type:String},
      phone2:{type:String},
      email:{type:String},
      email2:{type:String},
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("partenaire", partenaire);