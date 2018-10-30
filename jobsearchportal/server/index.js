const express = require("express");
const jobs = require('./job-details.json')
const cors = require('cors')
const app = express().use(cors());
 
const queryFunction = (list, search, key) => (search) ? list.filter(item => item[key].toLowerCase().includes(search.toLowerCase())) : list; 
const filterArrValues = (list, filterSkills, key) => (filterSkills.length > 0) ? list.filter(item => {
 let checkVal=false;
  item[key].map(currentValue => {
     const result = filterSkills.includes(currentValue)
     if(result===true && checkVal===false){
      checkVal=result; 
     } 
  }); 
  return checkVal; 
}) : list;

const filterRange = (list, filter, key) => (filter.length > 0) ? list.filter(item => item[key] >= filter[0] && item[key] <= filter[1]) : list;
 
const processsResults = (data, conditions) => {
  const queryData = conditions.search? queryFunction(data, conditions.search,'title'):data;
  const countryData = conditions.countries ? filterArrValues(queryData, conditions.countries,'countries'):queryData;
  const skillData = conditions.skills ? filterArrValues(countryData, conditions.skills,'skills'):countryData;
  const languageData = conditions.languages ? filterArrValues(skillData, conditions.languages, 'languages'):skillData;
  const jobTypeData = conditions.jobType ? queryFunction(languageData, conditions.jobType, 'jobType'):languageData;
  const availabilityData = conditions.availability ? filterArrValues(jobTypeData, conditions.availability, 'availability'):jobTypeData;
  const payRateData = conditions.payRate ? filterRange(availabilityData, conditions.payRate, 'payRate'):availabilityData;
  const experienceData = conditions.experienceLevel ? filterRange(payRateData, conditions.experienceLevel, 'experience'):payRateData;
  return experienceData;
};
 
app.get("/jobs", (req, res, next) => {
  req.query.skills= req.query.skills ?req.query.skills.split(","):req.query.skills;
  req.query.countries= req.query.countries ?req.query.countries.split(","):req.query.countries;
  req.query.languages= req.query.languages ?req.query.languages.split(","):req.query.languages;
  req.query.availability= req.query.availability ?req.query.availability.split(","):req.query.availability;
  req.query.payRate= req.query.payRate ?req.query.payRate.split(","):req.query.payRate;
  req.query.experienceLevel= req.query.experienceLevel ?req.query.experienceLevel.split("-"):req.query.experienceLevel;
  const results=processsResults(jobs.jobs,req.query);
  res.status(200).json(results);
}); 

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
