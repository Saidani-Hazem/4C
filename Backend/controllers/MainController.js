const event = require("../models/eventModel")
const club = require("../models/clubModel")
const partenaire = require("../models/partenaireModel")




const getall = async (req, res) => {
    try {
      const events = await event.find({});
      const clubs = await club.find({});
      const parts = await partenaire.find({});
      res.status(200).json({events,clubs,parts});
    } catch (error) {
      res.status(500).json({ err: error.message });
    }
  };


module.exports = {
    getall
}  