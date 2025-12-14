const express = require("express");
const db = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, (req, res) => {
  db.all(
    `SELECT posts.* FROM posts
     JOIN follows ON posts.user_id = follows.following_id
     WHERE follows.follower_id=?`,
    [req.user.id],
    (err, rows) => res.json(rows)
  );
});
module.exports= router;