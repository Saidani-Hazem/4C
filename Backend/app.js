const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);
app.use('/images', express.static('images'));

mongoose.connect(process.env.mongodb)
    .then(() => console.log("Connected To MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));


app.listen(process.env.port, () => console.log(`Working on port ${process.env.port}`));