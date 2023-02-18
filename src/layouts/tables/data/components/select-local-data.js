import React from "react";
import { Form, Select } from "antd";
function SelectLocalElement({ form, optionsLocal, dataIndex, title }) {
    const handleChange = (value) => {
        console.log(value);
    };
    const initValue = JSON.parse(`[${form.getFieldValue(dataIndex)}]`);
    form.setFieldValue(dataIndex, initValue);
    const SelectItem = (
        <Select
            size="large"
            maxTagCount="responsive"
            placeholder="اضغط للاختيار"
            onChange={handleChange}
            style={{
                width: "100%",
            }}
            options={optionsLocal}
        />
    );
    return (
        <Form.Item
            name={dataIndex}
            style={{
                margin: 0,
            }}
            rules={[
                {
                    required: true,
                    message: `حقل ${title} ضروري!`,
                },
            ]}
        >
            {SelectItem}
        </Form.Item>
    );
}
export default SelectLocalElement;
