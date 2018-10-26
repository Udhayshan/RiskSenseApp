const express = require("express");
const jobs = require('./job-details.json')
const cors = require('cors')
const app = express().use(cors());

app.get("/jobs", (req, res, next) => {
        res.status(200).json(jobs)
 });

app.listen(3333, () => {
  console.log("Server running on port 3333");
 });