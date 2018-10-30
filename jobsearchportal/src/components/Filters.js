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
      payRate: [1,1],
      experienceLevel: '',
      availability: []
    }
  }

  resetFilters = (key,val) => {
    if(key==='all')
    {
      this.setState({
        skills:[],
        countries: [],
        languages:[],
        jobType: '',
        payRate: [1,1],
        experienceLevel: '',
        availability: []
      },()=>{
        this.filterSearch();
      });
    }else{
     this.setState({[key]:val},()=>{
      this.filterSearch();
    });
    }
  }

  handleFilterChange = name => (value) => {
    this.setState({[name]:value},()=>{
      this.filterSearch();
    })
  }

  handleCheckBoxChange = name => (e) => {
    if(e.target.checked){
      this.setState({
        availability: [...this.state.availability, name]
      }, ()=>{
        this.filterSearch();
      })
    }
    else{
      this.setState({
        availability: this.state.availability.filter(x=> x!==name)
      }, ()=>{
        this.filterSearch();
      })
    }
  }

  filterSearch=()=>{
    const params={...this.state};
    this.props.filterSearch(params);
  }

  render() {
    const color = '#919eaf';
    const { skills, languages, countries, experienceLevel, jobType, payRate, availability } = this.state;
    return (
      <Fragment>
        <Row>
          <div><strong>FILTERS</strong><span onClick={(e)=>this.resetFilters('all')} style={{float: 'right', color: color}}>Clear all filters</span></div>
          <Divider style={{marginTop: '15px'}}/>
        </Row>
        <Row>
          <div><strong>Skills</strong><span onClick={(e)=>this.resetFilters('skills', [])} style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Please enter a skill"
              onChange={this.handleFilterChange('skills')}
              value={skills}
          >
            {skills && skills.map((value, i)=>
              <Option key={i}>{value}</Option>
            )}
          </Select>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Availability</strong><Icon type="info-circle" style={{paddingLeft:'4px'}}/><span onClick={(e)=>this.resetFilters('availability', [])} style={{float: 'right', color: color}}>Clear</span></div>
          <div className = "filter-field"><Checkbox  checked={availability.includes('hourly')} onChange={this.handleCheckBoxChange('hourly')}>Hourly</Checkbox></div>
          <div className = "filter-field"><Checkbox  checked={availability.includes('part-time')} onChange={this.handleCheckBoxChange('part-time')}>Part-time (20 hrs/wk)</Checkbox></div>
          <div className = "filter-field"><Checkbox  checked={availability.includes('full-time')} onChange={this.handleCheckBoxChange('full-time')}>Full-time (40 hrs/wk)</Checkbox></div>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Job type</strong><Icon type="info-circle" style={{paddingLeft:'4px'}}/><span onClick={(e)=>this.resetFilters('jobType', '')} style={{float: 'right', color: color}}>Clear</span></div>
          <Select value={jobType} placeholder="Select a job type" style={{ width: '100%', marginTop:'10px' }} onChange={this.handleFilterChange('jobType')}>
            <Option value="">Select a job type</Option>
            <Option value="perm">Permenant</Option>
            <Option value="temp">Temporary</Option>
          </Select>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Pay rate / hr ($)</strong><span onClick={(e)=>this.resetFilters('payRate', [1,1])} style={{float: 'right', color: color}}>Clear</span></div>
          <Slider 
            range step={1} 
            min={1} 
            max={100} 
            style={{ marginTop:'10px'}}
            value = {payRate}
            onChange={this.handleFilterChange('payRate')} 
          />
          <p><span style={{float: 'left'}}>1</span><span style={{float: 'right'}}>40+</span></p>
        </Row>
        <Row className = "filter-row">
          <div className = "filter-field"><strong>Experience level</strong><span onClick={(e)=>this.resetFilters('experienceLevel', '')} style={{float: 'right', color: color}}>Clear</span></div>
          <Select value={experienceLevel} placeholder="Select your experience level" style={{ width: '100%', marginTop:'10px' }} onChange={this.handleFilterChange('experienceLevel')}>
            <Option value="">Select experience level</Option>
            <Option value="1-3">1-3 Yrs</Option>
            <Option value="3-5">3-5 Yrs</Option>
          </Select>
        </Row>
        <Row className="filter-row">
          <div><strong>Countries</strong><span onClick={(e)=>this.resetFilters('countries', [])} style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Enter state,province or country"
              onChange={this.handleFilterChange('countries')}
              value={countries}
          >
          {countries && countries.map((value, i)=>
            <Option key={i}>{value}</Option>
          )}
          </Select>
        </Row>
        <Row className="filter-row">
          <div><strong>Languages</strong><span onClick={(e)=>this.resetFilters('languages', [])} style={{float: 'right', color: color}}>Clear</span></div>
          <Select
              mode="tags"
              style={{ width: '100%', marginTop:'10px' }}
              placeholder="Enter a language"
              onChange={this.handleFilterChange('languages')}
              value={languages}
          >
          {languages && languages.map((value, i)=>
            <Option key={i}>{value}</Option>
          )}
          </Select>
        </Row>
      </Fragment>
    );
  }
}
