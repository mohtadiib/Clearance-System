/* eslint-disable import/no-cycle,no-console,no-unused-vars,no-plusplus,no-use-before-define,react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import {Form, InputNumber, Select, message, Input, Space, Button} from "antd";
import { FileContext } from "../../index";
import SelectDocsElement from "../../../../tables/data/components/select-docs-element";
import {PlusOutlined, PoweroffOutlined} from "@ant-design/icons";

const { Option } = Select;

const productFieldList = [
    {key:0,name:"category_id",label:"النوع",message:"ادخل نوع المنتج", tableName:"clearance_categs", select: true},
    {key:1,name:"item_id",label:"الاسم",message:"ادخل اسم المنتج" ,tableName:"clearance_items", select: true},
    {key:2,name:"item_quantity",label:"العدد",message:"ادخل كمية المنتج"},
    {key:3,name:"item_weight",label:"الوزن",message:"ادخل وزن المنتج"},
]

function ProductStep() {
    const formFile = useContext(FileContext);
    const [messageApi, contextHolder] = message.useMessage();
    const [consDetails, setConsDetails] = useState([
        {
            key: 0,
            category_id: "",
            item_id: "",
        },
    ]);

    const warning = () => {
        messageApi.open({
            type: "warning",
            content: "لا يمكن اضافة اكثر من عشرة منتج",
        });
    };
    const suffixSelector = (indexKey) => (
        <Form.Item name={indexKey} noStyle>
            <Select
                style={{
                    width: 100,
                }}
            >
                <Option value="10">10 قدم</Option>
                <Option value="40">40 قدم</Option>
            </Select>
        </Form.Item>
    );

    useEffect(() => {
        addContainers();
    }, []);

    const addContainers = () => {
        const consNoTemp = formFile.form.getFieldValue("products_no");
        const listTemp = [];
        setConsDetails(listTemp);
        if (consNoTemp <= 0 || typeof consNoTemp !== "number") {
            formFile.form.setFieldValue("products_no", 1);
            listTemp.push({
                key: 0,
                category_id: "",
                item_id: "",
            });
            setConsDetails(listTemp);
        } else if (consNoTemp > 10) {
            warning();
            console.log("10 02 10");
            formFile.form.setFieldValue("products_no", 10);
            for (let i = 0; i < 10; i++) {
                listTemp.push({
                    key: i,
                    category_id: "",
                    item_id: "",
                });
            }
            setConsDetails(listTemp);
        } else {
            for (let i = 0; i < consNoTemp; i++) {
                listTemp.push({
                    key: i,
                    category_id: "",
                    item_id: "",
                });
            }
            setConsDetails(listTemp);
        }
    };

    const addItem = () => {
        let listTemp = [];
        listTemp = consDetails;
        listTemp.push({
            key: listTemp.length+1,
            category_id: "",
            item_id: "",
        });
        setConsDetails([...listTemp]);
        formFile.form.setFieldValue("products_no", listTemp.length);

    }

    return (
        <div>
            {contextHolder}
            <div
                style={{
                    display: 'flex',
                }}
                align="baseline"
            >
                <Form.Item
                    labelCol={{
                        span: 0,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValue={1} name="products_no" label="عدد العناصر">
                    <InputNumber onChange={addContainers} />
                </Form.Item>
                <Button
                    style={{marginRight:20}}
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={addItem}
                >
                    إضافة عنصر
                </Button>
            </div>
            <Form.List name="products">
                {(containers) => (
                    <>
                        {consDetails.map(({key, ...restField }) => (
                            <div key={key}>
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    {productFieldList.map((item)=>
                                       <div key={item.key}>
                                           {item.select?
                                           <SelectDocsElement
                                               restField={restField}
                                               customForFileAdd
                                               single
                                               form={formFile.form}
                                               tableName={item.tableName}
                                               dataIndex={[key, item.name]}
                                               title={item.label}
                                           />
                                           :<Form.Item
                                               {...restField}
                                               label={item.label}
                                               name={[key, item.name]}
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
                                                       message: item.message,
                                                   },
                                               ]}
                                           >
                                               <Input placeholder={item.message} />
                                           </Form.Item>
                                           }
                                       </div>
                                    )}
                                </Space>
                            </div>
                        ))}
                    </>
                )}
            </Form.List>
        </div>
    );
}

export default ProductStep;
