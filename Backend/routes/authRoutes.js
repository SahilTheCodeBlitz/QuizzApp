const express = require("express");
const register = require("../controllers/register");
const login = require("../controllers/login");
// const topicController = require("../controllers/topicController");
// const questionController = require("../controllers/questionController");
// const quizController = require("../controllers/quizController");

const router = express.Router();

// Register Route
router.post("/register", register);

// Login Route
router.post("/login", login);

// // Topic Route
// router.get("/", topicController.getTopics);
// router.post("/select", authMiddleware, topicController.saveSelectedTopics);

// // Question Route
// router.get("/:topic", authMiddleware, questionController.getQuestionsByTopic);

// // quiz route
// router.post("/submit", authMiddleware, quizController.submitAnswers);
// router.get("/leaderboard", authMiddleware, quizController.getLeaderboard);

module.exports = router;
