const express = require("express");
const router = express.Router();
//const MainController = require("./controllers/MainController")
//const AuthController = require("./controllers/auth/authController")
const adminController = require("./controllers/AdminController");

router
  .route("/admin/event")
  .post(adminController.addevent)
  .get(adminController.getevents);

router.route("/admin/event/:id").delete(adminController.deleteevent);

router
  .route("/admin/club")
  .post(adminController.addclub)
  .get(adminController.getclubs);

router.route("/admin/club/:id").delete(adminController.deleteclub);

router
  .route("/admin/partenaire")
  .post(adminController.addpartenaire)
  .get(adminController.getpartenaires);

router.route("/admin/partenaire/:id").delete(adminController.deletepartenaire);

module.exports = router;
