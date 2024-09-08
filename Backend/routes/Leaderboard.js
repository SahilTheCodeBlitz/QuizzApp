const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Leaderboard route to get users sorted by score
router.get("/leaderboard", async (req, res) => {
  try {
    // Find all users, sorted by score in descending order and limiting to top 10
    const leaderboard = await User.find()
      .sort({ score: -1 })
      .limit(10)
      .select("name score");

    res.json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
