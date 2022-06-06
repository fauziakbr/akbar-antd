import React, { Component } from "react";
import { Modal, message } from "antd";
import SimpleInput from "../../utils/SimpleInput";
import SimpleTextArea from "../../utils/SimpleTextArea";
import SimpleInputNumber from "../../utils/SimpleInputNumber";

class popupEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data ? props.data : {
                name: "",
                age: "",
                address: ""
            },

            loading: true,
            size: 'default'
        }
    }

    componentDidMount() {
        if (this.props.type === "Create") {
            this.setState({
                loading: false
            })
        } else {
            setTimeout(() =>
                this.setState({
                    loading: false
                }), 2000
            );
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

    onchangeInputNumber = (event, name) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: event ? event : null
            }
        });
    }

    onClickOk = () => {
        if (!this.state.data.age) {
            alert("Age is Required.")
        } else {
            this.messageAlert("success")
            if (this.props.type === "Create") {
                this.props.newData(this.state.data)
                this.props.onClickClose()
            } else {
                this.props.updateData(this.state.data)
                this.props.onClickClose()
            }
        }
    }

    messageAlert = (type) => {
        switch (type) {
            case 'success':
                return message.success('Data Saved Successfully');
            case 'error':
                return message.error('Data Failed to Save');
            default:
                return message.warning('This is a warning message');
        }
    };

    render() {
        return (
            <div>
                <Modal
                    title={this.props.type + " Employee"}
                    visible={this.props.modal}
                    onOk={() => { this.onClickOk() }}
                    onCancel={this.props.onClickClose}
                    okButtonProps={{
                        style: {
                            display: this.props.type === "Detail" ? "none" : null
                        },
                        disabled: this.state.loading ? true : false
                    }}
                    cancelButtonProps={{
                        style: {
                            display: null
                        },
                    }}
                >
                    <div>
                        <SimpleInput
                            loading={this.state.loading.toString()}
                            label={"Name"}
                            name={'name'}
                            placeholder="Name"
                            disabled={this.props.type === "Detail"}
                            onChange={this.onchangeInput}
                            value={this.state.data.name}
                        />
                        <SimpleInputNumber
                            loading={this.state.loading.toString()}
                            label={"Age"}
                            mandatory={"true"}
                            value={this.state.data.age}
                            placeholder="Age"
                            disabled={this.props.type === "Detail"}
                            maxLength={3}
                            onChange={(e) => this.onchangeInputNumber(e, "age")}
                        />
                        <SimpleTextArea
                            loading={this.state.loading.toString()}
                            label={"Address"}
                            name={'address'}
                            placeholder="Address"
                            disabled={this.props.type === "Detail"}
                            onChange={this.onchangeInput}
                            rows={4}
                            value={this.state.data.address}
                        />
                    </div>
                </Modal >
            </div >
        )
    }
}

export default popupEmployee;