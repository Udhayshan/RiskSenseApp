import React, { Component,Fragment } from 'react'
import { Job } from './Job'
import { Row, Col } from 'antd';
import { Select, Pagination } from 'antd';

const Option = Select.Option;

export class JobList extends Component {

  constructor(props){
    super(props);
    this.state = {
      jobs: this.props.jobsList,
      sortby:'Relevance', 
    }
  }
  handleChange=(value)=> {
    this.setState({sortby:value});
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
      <Pagination defaultCurrent={1} pageSize= {10} total={jobs.length} style={{display: 'flex', justifyContent: 'center'}} />
    </Fragment>
    )
  }
}