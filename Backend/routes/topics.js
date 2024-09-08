const express = require("express");
const router = express.Router();
const { selectTopics } = require("../controllers/topicsController");

router.get("/select", selectTopics);

module.exports = router;
