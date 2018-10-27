import React, { Component, Fragment } from 'react'; 
import { Divider, Select, Row, Checkbox, Icon, Slider } from 'antd'
const Option = Select.Option;

export class Filter extends Component {
  constructor(){
    super();
    this.state = {
      filters: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3333/filters')
    .then(response=> { return response.json();
    }).then(results => {
      const filters = results.filters.map(filter => {
      return {
        title: filter.title,
        type: filter.type,
        values: filter.values,
      }
    })
    const newState = Object.assign({}, this.state, {
      filters: filters
    });
    this.setState(newState);
  })
    .catch(error => console.log(error));
  }

  handleSkillChange = (value) => {
    console.log(`skill selected ${value}`);
  }

  handleAvailabilityChange = (e) => {

  }
  
  handleProfileWithoutPayRateChange = (e) => {

  }

  handleJobTypeChange = (value) => {
    console.log(`Job Type selected ${value}`);
  }

  handlePayRateChange = (value) => {
    console.log(`Pay rate selected ${value}`);
  }

  handleExperienceChange = (value) => {
    console.log(`Experience level selected ${value}`);
  }

  handleCountryChange = (value) => {
    console.log(`Country selected ${value}`);
  }

  handleLanguageChange = (value) => {
    console.log(`Language selected ${value}`);
  }

  render() {
    const color = '#919eaf';
    const skills = [];
    const countries = [];
    const languages = [];
    return (
      <Fragment>
        <Row>
          <div><strong>FILTERS</strong><span style={{float: 'right', color: color}}>Clear all filters</span></div>
          <Divider style={{marginTop: '15px'}}/>
        </Row>
        <Row>
          <div><strong>Skills</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Please enter a skill"
              onChange={this.handleSkillChange}
          >
            {skills}
          </Select>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Availability</strong><Icon type="info-circle" style={{paddingLeft:'4px'}}/><span style={{float: 'right', color: color}}>Clear</span></div>
          <div className = "filter-field"><Checkbox onChange={this.handleAvailabilityChange}>Hourly</Checkbox></div>
          <div className = "filter-field"><Checkbox onChange={this.handleAvailabilityChange}>Part-time (20 hrs/wk)</Checkbox></div>
          <div className = "filter-field"><Checkbox onChange={this.handleAvailabilityChange}>Full-time (40 hrs/wk)</Checkbox></div>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Job type</strong><Icon type="info-circle" style={{paddingLeft:'4px'}}/><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select placeholder="Select a job type" style={{ width: '100%', marginTop:'10px' }} onChange={this.handleJobTypeChange}>
            <Option value="perm">Permenant</Option>
            <Option value="temp">Temporary</Option>
          </Select>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Pay rate / hr ($)</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Slider 
            range step={1} 
            min={1} 
            max={40} 
            style={{ marginTop:'10px'}}
            onChange={this.handlePayRateChange} 
          />
          <p><span style={{float: 'left'}}>1</span><span style={{float: 'right'}}>40+</span></p>
          <div>
            <Checkbox onChange={this.handleProfileWithoutPayRateChange}>
              Include profiles without pay rates
            </Checkbox>
          </div>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Experience level</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select placeholder="Select your experience level" style={{ width: '100%', marginTop:'10px' }} onChange={this.handleExperienceChange}>
            <Option value="1-3">1-3 Yrs</Option>
            <Option value="3-5">3-5 Yrs</Option>
          </Select>
        </Row>
        <Row className="filter-row">
          <div><strong>Countries</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Enter state,province or country"
              onChange={this.handleCountryChange}
          >
            {countries}
          </Select>
        </Row>
        <Row className="filter-row">
          <div><strong>Languages</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Enter a language"
              onChange={this.handleLanguageChange}
          >
            {languages}
          </Select>
        </Row>
      </Fragment>
    );
  }
}
