import React from "react";
import { Form, Input, InputNumber } from "antd";
// eslint-disable-next-line react/prop-types
function InputField({ inputType, callPressEnter, dataIndex, title }) {
  const inputNode =
    inputType === "number" ? (
      <InputNumber onPressEnter={callPressEnter} />
    ) : (
      <Input onPressEnter={callPressEnter} />
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
      {inputNode}
    </Form.Item>
  );
}
export default InputField;
