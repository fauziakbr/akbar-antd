import React, { Component } from "react";
import { Input, Skeleton } from "antd";

class SimpleInput extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { label, mandatory, onChange, loading } = this.props
        return (
            <div style={{ paddingBottom: "20px" }}>
                <div>
                    <div>
                        <h4>{label} {mandatory && <span style={{ color: 'red' }}>*</span>}</h4>
                    </div>
                </div>
                {loading === "true" ? <Skeleton.Input size={this.state.size} active block /> :
                    <Input
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

export default SimpleInput;