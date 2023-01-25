/* eslint-disable no-console,react/prop-types,import/no-cycle,no-unused-vars,no-plusplus */
import React, { useContext, useEffect, useState } from "react";
import { Form, Input, InputNumber, Select, Radio, Button } from "antd";
import { FileContext } from "../add";

const list = [];

function ProductComponent({ call }) {
  const formFile = useContext(FileContext);

  return (
    <div>
      <Form.Item name="item_id" label="بند السلعة">
        <Select>
          {formFile.fileList.items.map((item) => (
            <Select.Option key={item.id} value={+item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="item_details" label="تفاصيل البند">
        <Input />
      </Form.Item>
      <Form.Item name="origin_country" label="بلد المنشأ">
        <Input />
      </Form.Item>
      <Form.Item name="shipping_country" label="بلد الشحن">
        <Input />
      </Form.Item>
      <Form.Item name="item_quantity" label="الكمية">
        <InputNumber />
      </Form.Item>
      <Form.Item name="item_weight" label="الوزن">
        <InputNumber />
      </Form.Item>
    </div>
  );
}

export default ProductComponent;
