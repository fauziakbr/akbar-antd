import React, { Component } from "react";
import { Col, Image, Layout, Row, Typography, Button, Form, Input, Checkbox } from 'antd';

import logo from "../../assets/playstation.png";
import SimpleInput from "../utils/SimpleInput";

const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                username: "",
                password: ""
            }
        }
    }

    onClickButton = () => {
        if (this.state.data.username === "admin" && this.state.data.password === "1234") {
            this.props.history.push("/dashboard");
        } else {
            alert("Wrong Username or Password")
        }
    }

    onchangeInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            data: {
                ...this.state.data,
                [name]: value ? value : null
            }
        });
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

                        <Col span={7}>
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
                    <Form
                        name="basic"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                name="username"
                                onChange={this.onchangeInput}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                name="password"
                                onChange={this.onchangeInput}
                            />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={() => { this.onClickButton() }}
                            >
                                LOGIN
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* <Row>
                        <Col span={24}>
                            <SimpleInput
                                label={"Username"}
                                name={'username'}
                                placeholder="Username"
                                onChange={this.onchangeInput}
                                value={this.state.data.username}
                            />
                        </Col>
                        <Col span={24}>
                            <SimpleInput
                                label={"Password"}
                                name={'password'}
                                placeholder="Password"
                                onChange={this.onchangeInput}
                                value={this.state.data.password}
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
                    </Row> */}
                </Content>
            </Layout>
        )
    }
}

export default Home;