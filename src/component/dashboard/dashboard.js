import React, { Component } from "react";
import { Card, Col, Row, Space } from 'antd';

class dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: "Akbar",
                    description: "belajar ant desain pertama kali biar bisa, makanya masih coba-coba"
                },
                {
                    name: "Way",
                    description: "bantuin belajar ant desain pertama kali biar bisa, makanya masih coba-coba"
                },
                {
                    name: "Lia",
                    description: "bantuin belajar ant desain pertama kali biar bisa, makanya masih coba-coba"
                },
                {
                    name: "Ricky",
                    description: "bantuin belajar ant desain pertama kali biar bisa, makanya masih coba-coba"
                }
            ]
        }
    }

    cardRender() {
        return this.state.data.map((data, index) => {
            return (
                <Col key={index} style={{ paddingBottom: '20px' }} span={8}>
                    <Card title={data.name} bordered={false}>
                        <div style={{ textAlign: 'left', fontSize: 17 }}>
                            {data.description}
                        </div>
                    </Card>
                </Col>
            )
        })
    }

    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {this.cardRender()}
                </Row>
            </div>
        )
    }
}

export default dashboard;