import React, { Component } from "react";
import { Table, Button, Space } from "antd";
import './style.css';
import PopupEmployee from "./popup/popupEmployee";

class employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    key: 1,
                    name: 'Akbar Fauzi',
                    age: 21,
                    address: "Rumah Akbar Fauzi"
                },
                {
                    key: 2,
                    name: 'Iswahyudi',
                    age: 25,
                    address: "Rumah Iswahyudi"
                },
                {
                    key: 3,
                    name: 'Ricky Wardani',
                    age: 22,
                    address: "Ricky Wardani"
                },
                {
                    key: 4,
                    name: 'Hikmah Lia Amalia Soliha',
                    age: 23,
                    address: "Hikmah Lia Amalia Soliha"
                }
            ],
            dataIndex: null,
            openModalCreate: false,
            openModal: false,
            type: '',

            limit: 5,
            currentPage: 1,

            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() =>
            this.setState({
                loading: false
            }), 1000
        );
    }

    showModal(type, index) {
        if (type === "Create") {
            this.setState({
                openModalCreate: !this.state.openModalCreate,
                type: type
            })
        } else {
            this.setState({
                openModal: !this.state.openModal,
                dataIndex: (this.state.currentPage - 1) * this.state.limit + index,
                type: type
            })
        }
    };

    closeModalCreate = () => {
        this.setState({
            openModalCreate: !this.state.openModalCreate,
        })
    };

    closeModal = () => {
        this.setState({
            openModal: !this.state.openModal,
        })
    };

    newData = (data) => {
        const lengthKey = this.state.data.length + 1
        data.key = lengthKey;
        this.state.data.push(data)
    };

    updateData = (data) => {
        this.state.data.forEach(element => {
            if (element.key === data.key) {
                this.state.data[this.state.dataIndex] = data
            }
        });
    };

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            // width: 250
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record, index) =>
            (<Space align="center" size="middle">
                <Button onClick={() => { this.showModal("Edit", index) }}>
                    EDIT
                </Button>
                <Button onClick={() => { this.showModal("Detail", index) }}>
                    DETAIL
                </Button>
            </Space>
            )
        },
    ];

    render() {
        return (
            <div>
                <div style={{ textAlign: "start" }}>
                    <Button
                        style={{ marginBottom: 16, backgroundColor: "#001529", color: "white" }}
                        onClick={() => { this.showModal("Create") }}
                    >
                        Add a row
                    </Button>
                </div>
                {this.state.data && <Table
                    columns={this.columns}
                    dataSource={[...this.state.data]}
                    pagination={{
                        pageSize: this.state.limit,
                    }}
                    // scroll={{ y: 300 }}
                    title={() => 'Employee'}
                    bordered
                    tableLayout="fixed"
                    onChange={(event) => {
                        this.setState({
                            currentPage: event.current
                        })
                    }}
                />}

                <div>
                    {this.state.openModalCreate &&
                        <PopupEmployee
                            modal={this.state.openModalCreate}
                            type={this.state.type}
                            newData={this.newData}
                            onClickClose={this.closeModalCreate}
                        />
                    }

                    {this.state.openModal &&
                        <PopupEmployee
                            modal={this.state.openModal}
                            type={this.state.type}
                            data={this.state.data[this.state.dataIndex]}
                            updateData={this.updateData}
                            onClickClose={this.closeModal}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default employee;