const express = require("express");
const cors = require("cors");

const suggestionsRouter = require("./routes/suggestions.router");
const { globalErrorHandler } = require("./middlewares");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/suggestions", suggestionsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(globalErrorHandler);

module.exports = app;
