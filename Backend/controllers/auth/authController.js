const user = require("../../models/userModel");
const bcrypt = require("bcrypt");

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


module.exports = { login};