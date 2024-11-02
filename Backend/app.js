const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const router = require("./router");
const bodyParser = require("body-parser");
require("dotenv").config()

//app.use("/api" , router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.mongodb).then(console.log("Connected To MongoDataBase")).catch()
app.listen(process.env.port , () => console.log(`Working on port ${process.env.port}`))