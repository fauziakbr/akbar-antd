import React, { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;

class SimpleTextArea extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { label, mandatory, onChange } = this.props
        return (
            <div style={{ paddingBottom: "20px" }}>
                <div>
                    <div>
                        <h4>{label} {mandatory && <span style={{ color: 'red' }}>*</span>}</h4>
                    </div>
                </div>
                <TextArea
                    {...this.props}
                    onChange={(e) => {
                        e.target.value = e.target.value
                        onChange(e)
                    }} />
            </div>
        )
    }
}

export default SimpleTextArea;