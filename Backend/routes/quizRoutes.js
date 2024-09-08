const express = require("express");
const router = express.Router();
const userModel = require("../models/user.js"); // Import the User model
const questions = require("../data/quizTopics.json");

// Route to handle quiz submission
router.post("/submit-quiz", async (req, res) => {
  const { userId, answers, selectedTopics } = req.body;
  console.log(userId);

  // Calculate score
  let score = 0;
  const correctAnswers = [];

  questions.forEach((question) => {
    const userAnswer = answers[question._id];
    if (userAnswer === question.correctAnswer) {
      score++;
    }
    correctAnswers.push({
      questionId: question._id,
      question: question.question,
      correctAnswer: question.correctAnswer,
      selectedAnswer: userAnswer || "No answer",
    });
  });

  try {
    // Update the user's score and selected topics
    await userModel.findByIdAndUpdate(userId, {
      $set: {
        score,
        selectedTopics: selectedTopics,
      },
    });

    // Respond with the results
    res.json({ score, correctAnswers, userAnswers: answers });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
