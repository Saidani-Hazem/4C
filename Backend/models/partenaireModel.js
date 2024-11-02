const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const partenaire = new Schema({

    name:{type:String , require:true},
    image:{type:String, require:true}
},{
    timeseries: true
})


module.exports = mongoose.model("partenaire" , partenaire);