import React, { Component } from "react";
import { Input, Skeleton } from "antd";

const { TextArea } = Input;

class SimpleTextArea extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { label, mandatory, onChange, loading } = this.props
        let rowsTemp = [];
        for (let index = 0; index < this.props.rows - 1; index++) {
            rowsTemp.push(index);
        }
        return (
            <div style={{ paddingBottom: "20px" }}>
                <div>
                    <div>
                        <h4>{label} {mandatory && <span style={{ color: 'red' }}>*</span>}</h4>
                    </div>
                </div>
                {loading === "true" ? rowsTemp.map((data, index) => {
                    return (<Skeleton.Input key={index} size={this.state.size} active block />)
                }) : <TextArea
                    {...this.props}
                    onChange={(e) => {
                        e.target.value = e.target.value
                        onChange(e)
                    }} />
                }
            </div>
        )
    }
}

export default SimpleTextArea;