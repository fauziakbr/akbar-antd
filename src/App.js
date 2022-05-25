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
      nameMenu: 'Dashboard',
      menuItems: [
        {
          key: 'Dashboard',
          label: 'Dashboard',
          icon: <UserOutlined />,
        },
        {
          key: 'Employee',
          label: 'Employee',
          icon: <VideoCameraOutlined />,
        }
      ]
    }
  }

  menuClick = (event) => {
    this.setState({ nameMenu: event.key })
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
                defaultSelectedKeys={['Dashboard']}
                items={this.state.menuItems}
                onClick={(e) => { this.menuClick(e) }}
              />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200, height: "550px" }}>
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="" style={{ padding: 24, textAlign: 'center' }}>
                  {this.state.nameMenu === "Dashboard" && <Dashboard menuName={'Dashboard'} />}
                  {this.state.nameMenu === "Employee" && <Employee menuName={'Employee'} />}
                </div>
              </Content>
              {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Gobang</Footer> */}
            </Layout>
          </Layout>
        </div>
      </HashRouter >

    )
  }
}

export default App;
