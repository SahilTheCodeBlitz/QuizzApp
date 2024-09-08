const express = require("express");
const router = express.Router();
const questions = require("../data/quizTopics.json");

router.post("/submit-quiz", (req, res) => {
  const { answers } = req.body;
  let score = 0;
  const correctAnswers = [];

  questions.forEach((question) => {
    if (answers[question._id] === question.correctAnswer) {
      score++;
    }
    correctAnswers.push({
      question: question.question,
      correctAnswer: question.correctAnswer,
    });
  });

  res.json({ score, correctAnswers });
});

module.exports = router;
