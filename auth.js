const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  db.run(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, hash],
    err => err
      ? res.status(400).json({ error: "User exists" })
      : res.json({ message: "Registered" })
  );
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username=?",
    [username],
    (err, user) => {
      if (!user || !bcrypt.compareSync(password, user.password))
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user.id }, "secret");
      res.json({ token });
    }
  );
});

module.exports = router;
