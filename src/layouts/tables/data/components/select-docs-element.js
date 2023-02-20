/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Form, Select } from "antd";
import axios from "axios";
import urlServer from "../../../../config/const";

let options = [];

// eslint-disable-next-line react/prop-types,no-unused-vars
function SelectDocsElement({ label, form, tableName, dataIndex, title, formed, single }) {
  const handleChange = (value) => {
    // eslint-disable-next-line no-console
    console.log("user value");
    console.log(value);
    form.setFieldValue("user", value);
  };
  const [loading, setLoading] = useState(false);
  const getSelectData = (list) => {
    options = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < list.length; i++) {
      options.push({
        value: +list[i].id,
        label: list[i].name,
      });
    }
  };
  const getData = async () => {
    setLoading(true);
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    await axios.post(urlServer, { table: tableName }).then((res) => {
      getSelectData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  const SelectItem = (
    <Select
      loading={loading}
      mode={single?"":"tags"}
      size={formed?"":"large"}
      maxTagCount="responsive"
      placeholder="اضغط للاختيار"
      onChange={handleChange}
      style={{
        width: "100%",
      }}
      options={options}
    />
  );
  return (
          <Form.Item
            label={label}
            name={dataIndex}
            style={formed?null:{
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
export default SelectDocsElement;
