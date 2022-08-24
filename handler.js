const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

// const URLS_TABLE = process.env.URLS_TABLE;

app.use(express.json());

app.get("/:urlId", async function (req, res) {
  res.status(200).json({ message: "Nothing is implemented, yet." });
});

app.get("/test/:urlId", async function (req, res) {
  res.status(200).json({ message: "This is a new endpoint. Nothing here!" });
});

app.use((req, res, next) => {
  console.log(req);
  return res.status(404).json({
    error: "URL not Found.",
  });
});

module.exports.handler = serverless(app);
