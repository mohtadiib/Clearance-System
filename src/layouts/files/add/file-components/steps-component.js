/* eslint-disable react/prop-types,no-unused-vars,no-console,import/no-cycle */
import React, { useContext, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { FileDoneOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
import stepsList from "./steps-list";
import { FileContext } from "../index";
import urlServer from "../../../../config/const";
import {useNavigate} from "react-router-dom";
import {succesMessage} from "../../../../components/Notifications";

const formData = {
  main: {},
  containers: "",
  products: {},
};

function StepsComponent() {
  const { token } = theme.useToken();
  const formFile = useContext(FileContext);
  const [current, setCurrent] = useState(0);
  const [shipping, setShipping] = useState(1);
  const navigate = useNavigate()

  const sendData = async () => {
    if (current === 0) {
      formData.main = formFile.form.getFieldsValue();
    } else if (current === 1) {
      formData.containers = JSON.stringify(formFile.form.getFieldValue("containers"));
    } else if (current === 2) {
      formData.products = formFile.form.getFieldsValue();

      console.log("formData");
      console.log(formData);

      await axios
          .post(`${urlServer}customs/file/insert/`, {
            table: "items",
            data: formData,
          })
          .then((res) => {
            console.log("send data res ");
            console.log(res.data);
            succesMessage()
            navigate("/tables")
          });
    }
  };

  const next = () => {
    setCurrent(current + 1);
    sendData();
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "right",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const call = () => {
    setShipping(+formFile.form.getFieldValue("shipping_type"));
  };
  return (
    <>
      <Steps current={current} items={stepsList(call, shipping)} />
      <div style={contentStyle}>{stepsList(call, shipping)[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < stepsList(call, shipping).length - 1 && (
          <Button
            style={{
              width: "12%",
            }}
            type="primary"
            onClick={() => next()}
          >
            <div style={{ marginRight: "30%", display: "inline" }}>التالي</div>
            <LeftOutlined style={{ marginRight: "30%", display: "inline" }} />
          </Button>
        )}
        {current === stepsList(call, shipping).length - 1 && (
          <Button
            style={{
              width: "12%",
            }}
            type="primary"
            onClick={sendData}
          >
            <div style={{ marginRight: "30%", display: "inline" }}>حفظ</div>
            <FileDoneOutlined style={{ marginRight: "30%", display: "inline" }} />
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
              width: "12%",
            }}
            onClick={() => prev()}
          >
            <div style={{ marginRight: "30%", display: "inline" }}>السابق</div>
            <RightOutlined style={{ marginRight: "30%", display: "inline" }} />
          </Button>
        )}
      </div>
    </>
  );
}

export default StepsComponent;
