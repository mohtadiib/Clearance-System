import React from 'react';
import {Form, Input, Space} from "antd";

function DataItemComponent({key}) {
    return (
        <div key={key}>
            <Space
                key={key}
                style={{
                    display: 'flex',
                    marginBottom: 8,
                }}
                align="baseline"
            >
                <Form.Item
                    label={"enter name"}
                    name={[key, "2"]}
                    labelCol={{
                        span: 0,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{marginRight:20}}
                    rules={[
                        {
                            required: true,
                            message: "الحقل ضروري",
                        },
                    ]}
                >
                    <Input placeholder="الحقل ضروري" />
                </Form.Item>
            </Space>
        </div>
    );
}

export default DataItemComponent;
