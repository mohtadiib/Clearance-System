/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Switch } from "antd";

// eslint-disable-next-line react/prop-types
function SwitchElement({ form, dataIndex, title, status }) {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    form.setFieldValue(dataIndex, 1);
  }, []);
  const onGenderChange = (value) => {
    switch (value) {
      case true:
        // eslint-disable-next-line react/prop-types
        form.setFieldValue(dataIndex, 1);
        return;
      case false:
        // eslint-disable-next-line react/prop-types
        form.setFieldValue(dataIndex, 0);
        break;
      default:
        break;
    }
  };
  // eslint-disable-next-line react/prop-types
  const on = status.itemOn;
  // eslint-disable-next-line react/prop-types
  const off = status.itemOff;
  const SelectItem = (
    <Switch onChange={onGenderChange} checkedChildren={on} unCheckedChildren={off} defaultChecked />
  );

  return (
    <Form.Item
      name={dataIndex}
      valuePropName="checked"
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
export default SwitchElement;
