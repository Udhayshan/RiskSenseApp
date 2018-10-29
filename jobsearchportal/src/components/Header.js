import React from 'react'; 
import { Layout, Row, Col, Select } from 'antd';


const { Header } = Layout;

export const HeaderBar =()=>{
  const headerStyle = {
    background: 'white',
    paddingLeft: '100px',
    paddingRight : '100px',
  }
  return(
    <Header style={headerStyle}>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <span style={{float: 'left'}}><strong>Hubstaff Talent</strong></span>
        </Col>
        <Col className="gutter-row" span={2}>
          <span>HOW IT WORKS</span>
        </Col>
        <Col className="gutter-row" span={2}>
          <Select value="Browse" style={{ float: 'right', paddingTop: '15px' }}>
          </Select>
        </Col>
        <Col className="gutter-row" span={2}>
          <span>SEARCH</span>
        </Col>
        <Col className="gutter-row" span={2}>
          <Select value="My Account" style={{ float: 'right', paddingTop: '15px'}}>
          </Select>
        </Col>
      </Row>
    </Header>
  );
} 