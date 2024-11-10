const events = require("../models/eventModel");
const clubs = require("../models/clubModel");
const partenaires = require("../models/partenaireModel");
const cloudinary = require("../cloudinary.js");

//event methodes

const addevent = async (req, res) => {
  const { name, localisation, date, description, image } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, { folder: "events" });
    const ev = await events.create({
      name,
      localisation,
      date,
      description,
      image: result.public_id,
      image_url: result.secure_url
    });
    await ev.save();
    res.status(200).json({ msj: "event saved" });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ err: error.message });
  }
};


const getevents = async (req, res) => {
  try {
    const event = await events.find({});
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const deleteevent = async (req, res) => {
  try {
    await events.deleteOne({ _id: req.params.id });
    res.status(200).json({ msj: "event deleted" });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// club methodes

const addclub = async (req, res) => {
  const { name, image } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, { folder: "clubs" });
    const club = await clubs.create({
      name,
      image: result.public_id,
      image_url: result.secure_url
    });
    await club.save();
    res.status(200).json({ msj: "club saved" });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ err: error.message });
  }
};

const getclubs = async (req, res) => {
  try {
    const club = await clubs.find({});
    res.status(200).json(club);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const deleteclub = async (req, res) => {
  try {
    await clubs.deleteOne({ _id: req.params.id });
    res.status(200).json({ msj: "club deleted" });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

// partenaire methodes

const addpartenaire = async (req, res) => {
  const { name, image } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, { folder: "partners" });
    const part  = await partenaires.create({
      name,
      image: result.public_id,
      image_url: result.secure_url
    });
    await part.save();
    res.status(200).json({ msj: "partner saved" });
  } catch (error) {
    console.error("error :", error);
    res.status(500).json({ err: error.message });
  }
};

const getpartenaires = async (req, res) => {
  try {
    const part = await partenaires.find({});
    res.status(200).json(part);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const deletepartenaire = async (req, res) => {
  try {
    await partenaires.deleteOne({ _id: req.params.id });
    res.status(200).json({ msj: "partenaire deleted" });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = {
  addevent,
  getevents,
  addclub,
  getclubs,
  getpartenaires,
  addpartenaire,
  deleteevent,
  deleteclub,
  deletepartenaire,
};
