
import './App.css';
import { Col, Row } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import RouterExportConfig from './Router/RouterMain'
import Nav from './component/MenuConfig/index'
import Login from './component/Login/index'
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <Row>
            <Col span={8}> <Nav /></Col>
          </Row>
        </Header>
        <Content
          style={{
            padding: '20px 50px',
            background:"#fff"
          }}
          className="site-layout-background"
         
        >
          <RouterExportConfig  />
        </Content>

      </Router >
    
    </Layout>


  );
}

export default App;
