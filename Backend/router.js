const express = require("express");
const router = express.Router();
const multer = require("multer");
const MainController = require("./controllers/MainController");
const AuthController = require("./controllers/auth/authController");
const adminController = require("./controllers/AdminController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/admin/event")
  .post(upload.single("image"), adminController.addevent)
  .get(adminController.getevents);

router.route("/admin/event/:id").delete(adminController.deleteevent);

router
  .route("/admin/club")
  .post(upload.single("image"), adminController.addclub)
  .get(adminController.getclubs);

router.route("/admin/club/:id").delete(adminController.deleteclub);

router
  .route("/admin/partenaire")
  .post(upload.single("image"), adminController.addpartenaire)
  .get(adminController.getpartenaires);

router.route("/admin/partenaire/:id").delete(adminController.deletepartenaire);

router.route("/admin/login").post(AuthController.login);
router.route("/home").get(MainController.getall);

module.exports = router;
