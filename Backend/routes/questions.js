const express = require("express");
const router = express.Router();
const questions = require("../data/quizTopics.json"); // Assuming you have the questions in a JSON file

router.post("/questions", (req, res) => {
  const { topics } = req.body;
  const filteredQuestions = questions.filter((q) => topics.includes(q.topic));
  res.json(filteredQuestions);
});

module.exports = router;
