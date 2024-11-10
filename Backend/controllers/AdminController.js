const events = require("../models/eventModel");
const clubs = require("../models/clubModel");
const partenaires = require("../models/partenaireModel");


//event methodes

const addevent = async (req, res) => {
  const { name, localisation, description, date } = req.body;

  if (!req.file) {
    return res.status(400).json({ err: "Image upload failed" });
  }
  const image = `images/${req.file.filename}`;
  try {
    const event = await events.create({
      name,
      localisation,
      description,
      date,
      image,
    });
    return res.status(200).json({ msg: "Event added successfully", event });
  } catch (error) {
    return res.status(500).json({ err: "Error adding event", error });
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
  const { name } = req.body;
    if (!req.file) {
      return res.status(400).json({ err: "Image upload failed" });
    }
    const image = `images/${req.file.filename}`;
  
    try {
      const club = await clubs.create({
        name,
        image,
      });
      return res.status(200).json({ msg: "Club added successfully", club });
    } catch (error) {
      
      return res.status(500).json({ err: "Error adding club", error });
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
  const { name } = req.body;
    if (!req.file) {
      return res.status(400).json({ err: "Image upload failed" });
    }
    const image = `images/${req.file.filename}`;
  
    try {
      const part = await partenaires.create({
        name,
        image,
      });
      return res.status(200).json({ msg: "partenaire added successfully", part });
    } catch (error) {
      
      return res.status(500).json({ err: "Error adding partenaire", error });
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
