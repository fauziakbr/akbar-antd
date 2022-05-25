import React, { Component } from "react";
import { Col, Image, Layout, Row, Typography, Button } from 'antd';

import logo from "../../assets/logo-prohace.png";
import SimpleInput from "../utils/SimpleInput";

const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClickButton = () => {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <Layout className="site-layout" style={{ minHeight: '100vh', height: "600px", backgroundColor: "#004c97" }}>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '100px 360px',
                        padding: 24,
                        minHeight: 280,
                        borderRadius: 10
                    }}
                >
                    <Row justify="space-between">
                        <Col span={8}>
                            <p className="txt-site txt-primary txt-12" style={{ fontStyle: 'italic' }}>Testing Form Login</p>
                        </Col>

                        <Col span={8}>
                            <Image
                                preview={false}
                                width={150}
                                height={30}
                                src={logo}
                            />
                        </Col>
                    </Row>
                    <br />
                    <h3 style={{ color: "#004c97", textAlign: "center" }}>Testing Form Login</h3>
                    <br />
                    <Row>
                        <Col span={24}>
                            <SimpleInput
                                label={"Username"}
                                name={'username'}
                                placeholder="Username"
                            />
                        </Col>
                        <Col span={24}>
                            <SimpleInput
                                label={"Password"}
                                name={'password'}
                                placeholder="Password"
                            />
                        </Col>
                        <Button
                            style={{
                                backgroundColor: "#004c97",
                                color: "white"
                            }}
                            onClick={() => { this.onClickButton() }}
                        >
                            Login
                        </Button>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default Home;