const events = require("../models/eventModel");
const clubs = require("../models/clubModel");
const partenaires = require("../models/partenaireModel");

//event methodes

const addevent = async (req, res) => {
  const event = new events(req.body);
  try {
    event.save();
    res.status(200).json({ msj: "event saved" });
  } catch (error) {
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
  const club = new clubs(req.body);
  try {
    club.save();
    res.status(200).json({ msj: "club saved" });
  } catch (error) {
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
  const part = new partenaires(req.body);
  try {
    part.save();
    res.status(200).json({ msj: "partenaire saved" });
  } catch (error) {
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
