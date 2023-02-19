import {
    Form,
    InputNumber,
    Switch,
} from 'antd';
import * as React from "react";
import SelectDocsElement from "../../tables/data/components/select-docs-element";

const AddOperationData = ({form}) => {

    return (
        <div>
            <SelectDocsElement formed label="العميل" single form={form} tableName="users" dataIndex="user" title="العميل" />
            <Form.Item
                label="الإجمالي"
                name="total"
                rules={[
                    {
                        required: true,
                        message: `حقل الإجمالي ضروري!`,
                    }
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item label="عدد الملفات" name="items_count"
                       rules={[
                           {
                               required: true,
                               message: `حقل عدد الملفات ضروري!`,
                           },
                       ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item label="حالة العملية" >
                <Switch checkedChildren="مفعلة" unCheckedChildren="غير مفعلة" defaultChecked/>
            </Form.Item>
        </div>
    );
};
export default AddOperationData;
