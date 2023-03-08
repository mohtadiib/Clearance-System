/* eslint-disable no-console,react/prop-types,import/no-cycle,no-unused-vars,no-plusplus */
import React, { useContext, useEffect, useState } from "react";
import { Form, Input, InputNumber, Select, Radio, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FileContext } from "../index";

function StepOne({ call, loadingGet }) {
  const formFile = useContext(FileContext);

  return (
    <div>
      <Form.Item
          name="supplier_id"
          label="المورد"
          rules= {[
              {
                  required: true,
                  message:"اختر مورد"
              }
          ]}
      >
        <Select loading={loadingGet}>
          {formFile.fileList.suppliers.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/* <div>{formFile.stepsFileEntery.map((item) => `${item.title}**`)}</div> */}
      <Form.Item
          name="shipping_line_id"
          label="الخط الملاحي"
          rules= {[
              {
                  required: true,
                  message:"اختر خط الملاحي"
              }
          ]}
      >
        <Select>
          {formFile.fileList.shipping_lines.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
          name="shipping_type"
          label="نوع الشحن"
          rules= {[
              {
                  required: true,
                  message:"اختر نوع شحن"
              }
          ]}
      >
        <Radio.Group onChange={call}>
          <Radio value="1"> General Cargo </Radio>
          <Radio value="2"> FCL </Radio>
          <Radio value="3"> LCL </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
          name="quantity"
          label="الكمية"
          rules= {[
              {
                  required: true,
                  message:"ادخل الكمية"
              }
          ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
          name="service_id"
          label="الخدمة"
          rules= {[
              {
                  required: true,
                  message:"ادخل الخدمة"
              }
          ]}
      >
        <Select>
          {formFile.fileList.services.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
          name="policy_number"
          label="رقم البوليصة"
          rules= {[
              {
                  required: true,
                  message:"ادخل رقم البوليصة"
              }
          ]}
      >
        <Input />
      </Form.Item>
        {+formFile.form.getFieldValue("shipping_type") === 1?
            <Form.Item
                name="package_type"
                label="نوع العبوة"
                rules= {[
                    {
                        required: true,
                        message:"اختر نوع العبوة"
                    }
                ]}
            >
                <Radio.Group>
                    <Radio value="1"> Pallet </Radio>
                    <Radio value="2"> Carton </Radio>
                    <Radio value="3"> Coil </Radio>
                    <Radio value="4"> Bundle </Radio>
                </Radio.Group>
            </Form.Item>:null
        }
    </div>
  );
}

export default StepOne;
