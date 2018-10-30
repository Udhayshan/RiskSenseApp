import React, { Component } from 'react'; 
import { Layout, Input, Row, Col } from 'antd';
import { JobList } from './JobList';
import { Filter } from './Filters'

const Search = Input.Search;

const { Content } = Layout;

export class MainContent extends Component{
  constructor() {
    super();
    this.state = {
      searchText: '',
      jobList: [],
      sortby:'Relevance', 
      showList:false,
      skills:[],
      countries: [],
      languages:[],
      jobType: '',
      payRate: [1,1],
      experienceLevel: '',
      availability: []
    }
  }

  componentDidMount(){
    this.filterSearch(this.state);
  }

  handleChange=(value)=> {
    this.setState({sortby:value});
  }

  searchText=(value)=>{
    this.setState({searchText:value,showList:false},()=>{
      this.filterSearch(this.state);
    })
  }

  filterSearch =(value)=>{
    let payRateMod;
    const { searchText } = this.state;
    const { skills, languages, countries, availability, jobType, payRate, experienceLevel}
            = {...value};
    this.setState({showList:false}); 

    if(payRate[0] === 1 && payRate[1] === 1){
      payRateMod = '';
    }else{
      payRateMod = payRate;
    }

   // const skillsLocal = skills ? skills.split(',') : skills;
    fetch('http://localhost:3333/jobs?search='+searchText+'&skills='+skills+'&countries='+countries+
    '&languages='+languages+'&jobType='+jobType+'&payRate='+payRateMod+
    '&experienceLevel='+experienceLevel+'&availability='+availability)
    .then(response=> { 
      return response.json();
    }).then(results => {
      this.setState({jobList: results,
        showList:true,}); 
  })
    .catch(error => console.log(error));
  }

  render() {
    const {jobList,showList} =this.state;
    return(
      <Content className="content-layout">
        <div className="search-bar">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={this.searchText}
          />
        </div>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row filter-list" span={5}>
              <Filter  filterSearch={this.filterSearch}/>
            </Col>
            <Col className="gutter-row job-list" span={14}>
              {
                (showList && jobList.length) ? 
                <JobList jobsList={jobList}/>
                : <strong>No results found for the search criteria</strong>
              }
            </Col>
            <Col className="gutter-row" span={5}>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
} 