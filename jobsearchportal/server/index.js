const express = require("express");
var app = express();

app.get("/jobs", (req, res, next) => {
  res.json(["Software Developer","Senior Software Developer","Product Manager","Business Analyst","Engineering Manager"]);
 });

app.listen(3333, () => {
  console.log("Server running on port 3333");
 });