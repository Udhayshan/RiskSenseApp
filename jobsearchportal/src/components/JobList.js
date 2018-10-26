import React, { Component,Fragment } from 'react'
import { Job } from './Job'
import { Row, Col } from 'antd';
import { Select, Pagination } from 'antd';

const Option = Select.Option;

export class JobList extends Component {

  constructor(){
    super();
    this.state = {
      jobs: [],
      sortby:'Relevance',
    }
  }

  handleChange=(value)=> {
    this.setState({sortby:value});
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
  render(){
    const {jobs,sortby}=this.state;
    return(
      <Fragment>
        <Row>
          <Col span={18}>
            <h2>Results</h2>
          </Col>
          <Col span={6}>
            <label>Sort by</label>
              <Select value={sortby} style={{ width: 120, float: 'right' }} onChange={this.handleChange}>
                <Option value="Date">Date</Option>
                <Option value="Relevance">Relevance</Option>
              </Select>
          </Col>
         
        </Row>

        {jobs && jobs.map((job,i) => <Job
                                  key = {i}
                                  {...job}
                                />
        )}
      <Pagination defaultCurrent={1} pageSize= {5} total={jobs.length} />
    </Fragment>
    )
  }
}