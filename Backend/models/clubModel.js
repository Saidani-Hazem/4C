const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const club = new Schema({

    name:{type:String , require:true},
    image:{type:String, require:true}
},{
    timeseries: true
})




module.exports = mongoose.model("club" , club);