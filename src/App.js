import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import './App.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Dashboard from './component/dashboard/dashboard';
import Employee from './component/employee/employee';

const { Content, Footer, Sider } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      nameMenu: 'Dashboard'
    }
  }

  render() {
    return (
      <HashRouter history={Router.browserHistory}>
        <div>
          <Layout hasSider>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['2']}
              >
                <Menu.Item key="1" icon={<UserOutlined />} onClick={() => { this.setState({ nameMenu: "Dashboard" }) }}>
                  Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => { this.setState({ nameMenu: "Employee" }) }}>
                  Employee
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="" style={{ padding: 24, textAlign: 'center' }}>
                  {this.state.nameMenu === "Dashboard" && <Dashboard menuName={'Dashboard'} />}
                  {this.state.nameMenu === "Employee" && <Employee menuName={'Employee'} />}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </div>
      </HashRouter >

    )
  }
}

export default App;
