/* eslint-disable react/prop-types,no-unused-vars,no-console,import/no-cycle */
import React, { useContext, useState } from "react";
import { Button, Form, Steps, theme } from "antd";
import { FileDoneOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import stepsList from "./steps-list";
import { FileContext } from "../index";

function StepsComponent({current, prev, loading, loadingGet}) {
  const { token } = theme.useToken();
  const formFile = useContext(FileContext);

  const [shipping, setShipping] = useState(1);

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "right",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding:20
  };

  const call = () => {
    setShipping(+formFile.form.getFieldValue("shipping_type"));
  };
  return (
    <>
      <Steps current={current} items={stepsList(call, shipping, loadingGet)} />
      <div style={contentStyle}>{stepsList(call, shipping)[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current <= stepsList(call, shipping).length - 1 && (
            <Form.Item label="" colon={false}>
              <Button
                  style={{
                    width: "30%",
                    direction: "ltr"
                  }}
                  type="primary"
                  icon={current === stepsList(call, shipping).length - 1?
                      <FileDoneOutlined />
                      :<LeftOutlined />
                  }
                  loading={loading}
                  htmlType="submit"
              >
                  {current === stepsList(call, shipping).length - 1 ? "حفظ البيانات" : "التالي"}
              </Button>
                {/*<Button*/}
                {/*    style={{*/}
                {/*        width: "12%",*/}
                {/*        direction:"ltr"*/}
                {/*    }}*/}
                {/*    type="primary"*/}
                {/*    icon={<FileDoneOutlined />}*/}
                {/*    loading={loading}*/}
                {/*    htmlType="submit"*/}
                {/*>*/}
                {/*    حفظ البيانات*/}
                {/*</Button>*/}
            </Form.Item>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
              width: "12%",
            }}
            onClick={prev}
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
