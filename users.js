const express = require("express");
const db = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

/* Profile */
router.get("/:id", auth, (req, res) => {
  const userId = req.params.id;

  db.get("SELECT username FROM users WHERE id=?", [userId], (err, user) => {
    db.all("SELECT * FROM posts WHERE user_id=?", [userId], (err, posts) => {
      db.get("SELECT COUNT(*) followers FROM follows WHERE following_id=?", [userId], (e, f1) => {
        db.get("SELECT COUNT(*) following FROM follows WHERE follower_id=?", [userId], (e, f2) => {
          db.get(
            "SELECT 1 FROM follows WHERE follower_id=? AND following_id=?",
            [req.user.id, userId],
            (e, follow) => {
              res.json({
                username: user.username,
                posts,
                followers: f1.followers,
                following: f2.following,
                isFollowing: !!follow
              });
            }
          );
        });
      });
    });
  });
});

/* Follow */
router.post("/:id/follow", auth, (req, res) => {
  db.run(
    "INSERT OR IGNORE INTO follows VALUES (?,?)",
    [req.user.id, req.params.id],
    () => res.json({ message: "Followed" })
  );
});

/* Unfollow */
router.post("/:id/unfollow", auth, (req, res) => {
  db.run(
    "DELETE FROM follows WHERE follower_id=? AND following_id=?",
    [req.user.id, req.params.id],
    () => res.json({ message: "Unfollowed" })
  );
});

module.exports = router;
