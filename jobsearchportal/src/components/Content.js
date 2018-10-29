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
      searchText: 'all',
      jobList: [],
      sortby:'Relevance', 
      showList:false,
    }
  }

  componentDidMount(){
    this.getJobList();
  }

  getJobList=()=>{
    const search=this.state.searchText;
    const value = (search) ? search : 'all';
    fetch('http://localhost:3333/jobs/' + value)
    .then(response=> { return response.json();
    }).then(results => {
    const newState = Object.assign({}, this.state, {
      jobList: results,
      showList:true,
    });
    this.setState(newState);
  })
    .catch(error => console.log(error));
  }

  handleChange=(value)=> {
    this.setState({sortby:value});
  }

  searchText=(value)=>{
    this.setState({searchText:value,showList:false},()=>{
      this.getJobList();
    })
  }

  filterSearch =(value)=>{
    console.log('testing...',value);
    //TODO call filter api to filter the joblist
  }

  render() {
    const {searchText,jobList,showList} =this.state;
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
                <JobList searchText = {searchText} jobsList={jobList}/>
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