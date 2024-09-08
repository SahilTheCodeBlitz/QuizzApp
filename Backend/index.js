const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
const topicsRouter = require("./routes/topics.js");
const questions = require("./routes/questions.js");

const quizRoutes = require("./routes/quizRoutes.js");
const leaderboardRoutes = require("./routes/Leaderboard.js");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

// routes
app.use("/api/users", authRoutes);
app.use("/api/topics", topicsRouter);
app.use("/api/", questions);

app.use("/api/", quizRoutes);
app.use("/api", leaderboardRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("server is running", port);
  });
});
