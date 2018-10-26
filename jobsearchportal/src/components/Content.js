import React from 'react'; 
import { Layout, Input, Row, Col } from 'antd';
import { JobList } from './JobList';

const Search = Input.Search;

const { Content } = Layout;

export const MainContent =()=>{
  return(
    <Content className="content-layout">
      <div className="search-bar">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={5}>
            <div className="gutter-box">Filters</div>
          </Col>
          <Col className="gutter-row job-list" span={14}>
            <JobList />
          </Col>
          <Col className="gutter-row" span={5}>
          </Col>
        </Row>
      </div>
    </Content>
  );
} 