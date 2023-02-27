/* eslint-disable import/no-cycle,no-console,no-unused-vars,no-plusplus,no-use-before-define,react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Form, InputNumber, Select, message } from "antd";
import { FileContext } from "../index";

const { Option } = Select;

function ContainerDetails() {
  const formFile = useContext(FileContext);
  const [messageApi, contextHolder] = message.useMessage();
  const [consDetails, setConsDetails] = useState([
    {
      key: 0,
      container: {
        container_no: "",
        container_size: "",
      },
    },
  ]);

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "لا يمكن اضافة اكثر من عشرين حاوية",
    });
  };
  const suffixSelector = (indexKey) => (
    <Form.Item name={indexKey} noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="20">20 قدم</Option>
        <Option value="40">40 قدم</Option>
      </Select>
    </Form.Item>
  );

  useEffect(() => {
    addContainers();
  }, []);

  const addContainers = () => {
    const consNoTemp = formFile.form.getFieldValue("containers_no");
    const listTemp = [];
    setConsDetails(listTemp);
    if (consNoTemp <= 0 || typeof consNoTemp !== "number") {
      formFile.form.setFieldValue("containers_no", 1);
      listTemp.push({
        key: 0,
        container: {
          container_no: "",
          container_size: "",
        },
      });
      setConsDetails(listTemp);
    } else if (consNoTemp > 20) {
      warning();
      console.log("20 02 20");
      formFile.form.setFieldValue("containers_no", 20);
      for (let i = 0; i < 20; i++) {
        listTemp.push({
          key: i,
          container: {
            container_no: "",
            container_size: "",
          },
        });
      }
      setConsDetails(listTemp);
    } else {
      for (let i = 0; i < consNoTemp; i++) {
        listTemp.push({
          key: i,
          container_no: "",
          container_size: "",
        });
      }
      setConsDetails(listTemp);
    }
  };

  return (
    <div>
      {contextHolder}
      <Form.Item initialValue={1} name="containers_no" label="عدد الحاويات">
        <InputNumber onChange={addContainers} />
      </Form.Item>
      <Form.List name="containers">
        {(containers) => (
          <>
            {consDetails.map(({ key, ...restField }) => (
              <div key={key}>
                <Form.Item
                  name={[key, "container_no"]}
                  label="رقم وحجم الحاوية"
                  rules={[
                    {
                      required: true,
                      message: "Please input donation amount!",
                    },
                  ]}
                >
                  <InputNumber
                    addonAfter={suffixSelector([key, "container_size"])}
                    style={{
                      width: "50%",
                    }}
                  />
                </Form.Item>
              </div>
            ))}
          </>
        )}
      </Form.List>
    </div>
  );
}

export default ContainerDetails;
