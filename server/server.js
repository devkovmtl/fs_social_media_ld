import dotenv from "dotenv";
dotenv.config();
import express from "express";

const { PORT } = process.env;

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    data: "Hello world",
  });
});

app.listen(PORT, console.log(`http://localhost:${PORT}`));
