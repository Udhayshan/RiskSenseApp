const express = require("express");
const jobs = require('./job-details.json')
const cors = require('cors')
const app = express().use(cors());

const byTitle = title => jobTitle =>
  jobTitle.title.toLowerCase().includes(title.toLowerCase())

app.get("/jobs/:search", (req, res, next) => {
  if (req.params.search === 'all') {
    res.status(200).json(jobs.jobs)
  } else {
    res.status(200).json(
      jobs.jobs.filter(byTitle(req.params.search))
    )
  }
});

app.post("/filters", (req, res, next) => {
  // TODO handle filter request from UI
});

app.listen(3333, () => {
  console.log("Server running on port 3333");
});