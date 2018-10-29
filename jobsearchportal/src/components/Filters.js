import React, { Component, Fragment } from 'react'; 
import { Divider, Select, Row, Checkbox, Icon, Slider } from 'antd'
const Option = Select.Option;

export class Filter extends Component {
  constructor(){
    super();
    this.state = {
      skills:[],
      countries: [],
      languages:[],
      jobType: '',
      payRate: '',
      experienceLevel: '',
      hourly: '',
      partTime: '',
      fullTime: ''
    }
  }

  handleFilterChange = name => (value) => {
    this.setState({[name]:value},()=>{
      this.filterSearch();
    })
  }

  handleCheckBoxChange = name => (e) => {
    this.setState({[name]:e.target.checked},()=>{
      this.filterSearch();
    })
  }

  filterSearch=()=>{
    const params={...this.state};
    this.props.filterSearch(params);
  }

  render() {
    const color = '#919eaf';
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
              onChange={this.handleFilterChange('skills')}
          >
            {[]}
          </Select>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Availability</strong><Icon type="info-circle" style={{paddingLeft:'4px'}}/><span style={{float: 'right', color: color}}>Clear</span></div>
          <div className = "filter-field"><Checkbox onChange={this.handleCheckBoxChange('hourly')}>Hourly</Checkbox></div>
          <div className = "filter-field"><Checkbox onChange={this.handleCheckBoxChange('partTime')}>Part-time (20 hrs/wk)</Checkbox></div>
          <div className = "filter-field"><Checkbox onChange={this.handleCheckBoxChange('fullTime')}>Full-time (40 hrs/wk)</Checkbox></div>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Job type</strong><Icon type="info-circle" style={{paddingLeft:'4px'}}/><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select placeholder="Select a job type" style={{ width: '100%', marginTop:'10px' }} onChange={this.handleFilterChange('jobType')}>
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
            onChange={this.handleFilterChange('payRate')} 
          />
          <p><span style={{float: 'left'}}>1</span><span style={{float: 'right'}}>40+</span></p>
          <div>
            <Checkbox onChange={this.handleFilterChange}>
              Include profiles without pay rates
            </Checkbox>
          </div>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Experience level</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select placeholder="Select your experience level" style={{ width: '100%', marginTop:'10px' }} onChange={this.handleFilterChange('experienceLevel')}>
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
              onChange={this.handleFilterChange('countries')}
          >
            {[]}
          </Select>
        </Row>
        <Row className="filter-row">
          <div><strong>Languages</strong><span style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Enter a language"
              onChange={this.handleFilterChange('languages')}
          >
            {[]}
          </Select>
        </Row>
      </Fragment>
    );
  }
}
