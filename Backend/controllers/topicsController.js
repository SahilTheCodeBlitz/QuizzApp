const { getTopics } = require("../models/topicModel");

const selectTopics = (req, res) => {
  try {
    const topics = getTopics();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch topics" });
  }
};

module.exports = { selectTopics };
