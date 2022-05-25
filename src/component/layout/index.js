import React from "react";
import { Layout } from "antd";
import SideMenu from "./sideMenu";

const { Content, Footer } = Layout

const AppRoute = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', height: "600px" }}>
            <SideMenu />
            <Layout>
                <Content style={{ margin: "20px 16px" }}>{children}</Content>
                {/* <Footer style={{ textAlign: "center" }}>Cod3a 2020</Footer> */}
            </Layout>
        </Layout>
    )
}

export default AppRoute;