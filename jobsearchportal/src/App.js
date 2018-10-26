import React, { Component } from 'react';
import './App.css';
import { JobList } from './components/JobList'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      jobs: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3333/jobs')
    .then(response=> { return response.json();
    }).then(results => {
      const jobs = results.jobs.map(job => {
      return {
        title: job.title,
        location: job.location,
        country: job.country,
        experience: job.experience,
        payRate: job.payRate,
        description: job.description,
        company: job.company,
        availability: job.availability,
        replyRate: job.replyRate,
        skills: job.skills,
        languages: job.languages,
        jobType: job.jobType
      }
    })
    const newState = Object.assign({}, this.state, {
      jobs: jobs
    });
    this.setState(newState);
  })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="AppLayout">
        <JobList jobs={this.state.jobs}/>
      </div>
    );
  }
}
