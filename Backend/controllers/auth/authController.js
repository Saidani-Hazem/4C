const user = require("../../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET;




const login = async (req, res) => {
  const { username, password } = req.body;
  const admin = user.findOne({});
  if (!admin && username == "adminadmin" && pasword == "admin") {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else if (admin.username == username && admin.password == password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    return res.status(400).json({ msg: "verifier vos parametres" });
  }
};

module.exports = {login}