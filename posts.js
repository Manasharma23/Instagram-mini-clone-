const express = require("express");
const db = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

/* Create post */
router.post("/", auth, (req, res) => {
  const { image_url, caption } = req.body;
  db.run(
    "INSERT INTO posts (user_id, image_url, caption) VALUES (?,?,?)",
    [req.user.id, image_url, caption],
    () => res.json({ message: "Post created" })
  );
});

/* Like post */
router.post("/:id/like", auth, (req, res) => {
  db.run(
    "INSERT OR IGNORE INTO likes VALUES (?,?)",
    [req.user.id, req.params.id],
    () => res.json({ message: "Liked" })
  );
});

/* Comment */
router.post("/:id/comment", auth, (req, res) => {
  db.run(
    "INSERT INTO comments (user_id, post_id, content) VALUES (?,?,?)",
    [req.user.id, req.params.id, req.body.content],
    () => res.json({ message: "Comment added" })
  );
});

/* Get single post */
router.get("/:id", auth, (req, res) => {
  db.get(
    "SELECT * FROM posts WHERE id=?",
    [req.params.id],
    (err, post) => {
      db.all(
        `SELECT comments.*, users.username
         FROM comments JOIN users ON comments.user_id = users.id
         WHERE post_id=?`,
        [req.params.id],
        (err, comments) => {
          post.comments = comments;
          res.json(post);
        }
      );
    }
  );
});

module.exports = router;