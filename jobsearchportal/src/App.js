import React, { Component } from 'react';
import './App.css';
import { HeaderBar } from './components/Header'
import { MainContent } from './components/Content'

import { Layout } from 'antd';
import 'antd/dist/antd.css';

export class App extends Component {
  
  render() {
    return (
      <div>
        <Layout>
          <HeaderBar />
          <MainContent />
        </Layout>
      </div>
    );
  }
}
