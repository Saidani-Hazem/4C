const user = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    let admin = await user.findOne({});

    if (!admin) {
      const hashedPassword = await bcrypt.hash(password, 10);

      admin = await user.create({
        username,
        password: hashedPassword,
      });

      const token = admin.generateAuthToken();
      return res
        .status(201)
        .json({ token, msj: "Utilisateur créé et connecté avec succès." });
    } else {
      const pass = await bcrypt.compare(password, admin.password);

      if (pass) {
        const token = admin.generateAuthToken();
        return res.status(200).json({ token, msj: "Connecter" });
      } else {
        return res
          .status(400)
          .json({ err: "Nom dutilisateur ou mot de passe incorrect." });
      }
    }
  } catch (error) {
    return res.status(500).json({ err: "Erreur du serveur" });
  }
};

const changePass = async (req, res) => {
  const { actualPass, newPass } = req.body;
  try {
    const admin = await user.findOne({});
    if (!admin) {
      return res.status(400).json({ err: "Aucun utilisateur trouvé" });
    }
    const pass = await bcrypt.compare(actualPass, admin.password);
    if (pass) {
      const hashedPassword = await bcrypt.hash(newPass, 10);
      const updateadmin = await user.findByIdAndUpdate(
        admin._id,
        { password: hashedPassword },
        { new: true, runValidators: true }
      );
      if (!updateadmin) {
        return res.status(404).json({ err: "Aucun utilisateur trouvé" });
      }
      return res.status(200).json({ msg: "Mot de passe modifié avec succès" });
    } else {
      return res.status(400).json({ err: "Mot de passe actuel incorrect" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ err: "Erreur serveur", details: error.message });
  }
};



const verify = async(req, res) => {
  const token = req.body.token;
  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(400).json({ err: "user non authentifier" });
        } else {
          res.status(200).json({ msj: "user authentifier" });
        }
      });
    } else {
      res.status(400).json({ err: "user non authentifier" });
    }
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

module.exports = { login, changePass,verify };