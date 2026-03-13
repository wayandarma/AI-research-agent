require("dotenv").config();

const express = require("express");
const cors = require("cors");
const researchRouter = require("./routes/research");
const { DB_PATH } = require("./db/database");

const app = express();
const PORT = Number(process.env.PORT || 3001);

const corsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// In Express 5, path-to-regexp v8 requires named wildcards (/*splat not *)
app.options("/*splat", cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    database: DB_PATH,
  });
});

app.use("/api/research", researchRouter);

app.use((error, _req, res, _next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    error: error.message || "Internal server error",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`AI Research Agent backend listening on port ${PORT}`);
  });
}

module.exports = app;

