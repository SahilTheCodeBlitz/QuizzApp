const getQuizResults = async (req, res) => {
  try {
    const { userId } = req.query;
    // Fetch results from the database based on userId
    // Replace with actual database logic
    const results = await fetchResultsFromDatabase(userId);

    res.json({
      success: true,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getQuizResults };
