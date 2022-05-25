import React from "react";
import { Layout, Menu } from "antd";
import { TeamOutlined, DashOutlined } from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout

const SideMenu = () => {
    const location = useLocation();

    return (
        <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">

                <Menu.Item key={"/dashboard"}>
                    <DashOutlined />
                    <span>Dashboard</span>
                    <Link to={"/dashboard"} />
                </Menu.Item>

                <Menu.Item key={"/employee"}>
                    <TeamOutlined />
                    <span>Employee</span>
                    <Link to={"/employee"} />
                </Menu.Item>

            </Menu>
        </Sider>
    )
}

export default SideMenu;