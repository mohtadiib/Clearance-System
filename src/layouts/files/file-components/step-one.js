/* eslint-disable no-console,react/prop-types,import/no-cycle,no-unused-vars,no-plusplus */
import React, { useContext, useEffect, useState } from "react";
import { Form, Input, InputNumber, Select, Radio, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FileContext } from "../add";

const list = [];

function StepOne({ call }) {
  const formFile = useContext(FileContext);

  return (
    <div>
      <Form.Item name="suplllier_id" label="المورد">
        <Select>
          {formFile.fileList.suppliers.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/* <div>{formFile.stepsFileEntery.map((item) => `${item.title}**`)}</div> */}
      <Form.Item name="shipping_line_id" label="الخط الملاحي">
        <Select>
          {formFile.fileList.shipping_lines.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="shipping_type" label="نوع الشحن">
        <Radio.Group onChange={call}>
          <Radio value="1"> General Cargo </Radio>
          <Radio value="2"> FCL </Radio>
          <Radio value="3"> LCL </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="quantity" label="الكمية">
        <InputNumber />
      </Form.Item>
      <Form.Item name="service_id" label="الخدمة">
        <Select>
          {formFile.fileList.services.map((item) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/*<Form.Item name="port_id" label="ميناء التفريغ">
        <Radio.Group>
          <Radio value="1"> PZU_NU </Radio>
          <Radio value="2"> PZU_SU </Radio>
          <Radio value="3"> PZU_DN </Radio>
        </Radio.Group>
      </Form.Item>*/}
      {/*<Form.Item name="clearance_station_id" label="محطة التخليص">
        <Radio.Group>
          <Radio value="1"> بورتسودان </Radio>
          <Radio value="2"> سوبا </Radio>
          <Radio value="3"> عطبرة </Radio>
          <Radio value="4"> حلفا </Radio>
        </Radio.Group>
      </Form.Item>*/}
     {/* <Form.Item name="price_of_products_inclusive" label="سعر البضاعة شامل">
        <Radio.Group>
          <Radio value="1"> FOB </Radio>
          <Radio value="2"> CNF </Radio>
          <Radio value="3"> CIF </Radio>
        </Radio.Group>
      </Form.Item>*/}
      <Form.Item name="policy_number" label="رقم البوليصة">
        <Input />
      </Form.Item>
        {+formFile.form.getFieldValue("shipping_type") === 1?
            <Form.Item name="package_type" label="نوع العبوة">
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
