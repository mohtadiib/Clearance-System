import React from "react";
import { Form } from "antd";
import { DatePicker } from 'antd';

function DateComponent() {
    const inputNode = <DatePicker disabled/>;
    return (
        <Form.Item
            style={{
                margin: 0,
            }}
        >
            {inputNode}
        </Form.Item>
    );
}
export default DateComponent;
