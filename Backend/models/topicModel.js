const fs = require("fs");
const path = require("path");

const topicsFilePath = path.join(__dirname, "../data/quizTopics.json");

const getTopics = () => {
  const topicsData = fs.readFileSync(topicsFilePath);
  return JSON.parse(topicsData);
};

module.exports = { getTopics };
