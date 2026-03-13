const express = require("express");
const { runResearchAgent } = require("../agent/orchestrator");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const topic = typeof req.body?.topic === "string" ? req.body.topic.trim() : "";

  if (!topic) {
    return res.status(400).json({
      error: "topic is required",
    });
  }

  try {
    const result = await runResearchAgent(topic);
    const statusCode = result.status === "error" ? 500 : 200;

    return res.status(statusCode).json(result);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

