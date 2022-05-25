import React, { Component } from "react";
import { Input, Skeleton } from 'antd';

class SimpleInputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const { value, onBlur, onChange } = this.props;
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
        if (onBlur) {
            onBlur();
        }
    };

    render() {
        const { label, mandatory, loading } = this.props
        return (
            <div style={{ paddingBottom: "20px" }}>
                <div>
                    <div>
                        <h4>{label} {mandatory && <span style={{ color: 'red' }}>*</span>}</h4>
                    </div>
                </div>
                {loading === "true" ? <Skeleton.Input size={this.state.size} active block /> : <Input
                    {...this.props}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                />
                }
            </div>
        );
    }
}

export default SimpleInputNumber;