import React from 'react'; 
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderBar =()=>{
  const headerStyle = {
    background: 'white',
  }
  return(
    <Header style={headerStyle}>
      <div>
        HEADER
      </div>
    </Header>
  );
} 