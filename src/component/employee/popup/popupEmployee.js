import React, { Component } from "react";
import { Modal } from "antd";
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
            }
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
        this.props.onClickClose()
    }

    render() {
        return (
            <div>
                <Modal
                    title={this.props.type + " Employee"}
                    visible={this.props.modal}
                    onOk={() => this.onClickOk()}
                    onCancel={this.props.onClickClose}
                    okButtonProps={{
                        style: {
                            display: this.props.type === "Detail" ? "none" : null,
                        },
                    }}
                    cancelButtonProps={{
                        style: {
                            display: null,
                        },
                    }}
                >
                    <div>
                        <SimpleInput
                            label={"Name"}
                            name={'name'}
                            placeholder="Name"
                            disabled={this.props.type === "Detail"}
                            onChange={this.onchangeInput}
                            value={this.state.data.name}
                        />
                        <SimpleInputNumber
                            label={"Age"}
                            mandatory={true}
                            value={this.state.data.age}
                            placeholder="Age"
                            disabled={this.props.type === "Detail"}
                            maxLength={3}
                            onChange={(e) => this.onchangeInputNumber(e, "age")}
                        />
                        <SimpleTextArea
                            label={"Address"}
                            name={'address'}
                            placeholder="Address"
                            disabled={this.props.type === "Detail"}
                            onChange={this.onchangeInput}
                            rows={4}
                            value={this.state.data.address}
                        />
                    </div>
                </Modal>
            </div >
        )
    }
}

export default popupEmployee;