/* eslint-disable import/no-cycle,no-console,no-unused-vars,no-plusplus,no-use-before-define,react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import {Form, InputNumber, Select, message, Input, Space, Button} from "antd";
import { FileContext } from "../../index";
import SelectDocsElement from "../../../../tables/data/components/select-docs-element";
import {PlusOutlined, PoweroffOutlined} from "@ant-design/icons";
import axios from "axios";
import urlServer from "../../../../../config/const";


const productFieldList = [
    {key:0,name:"data_id",init:true},
    {key:1,name:"data_value",message:"ادخل قيمة" },
]

function FileDataStep() {
    const formFile = useContext(FileContext);
    // const [messageApi, contextHolder] = message.useMessage();
    const [fileData, setFileData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getFileData(){
        const serviceId = formFile.form.getFieldValue("service_id")
        setLoading(true)
        await axios.post(`${urlServer}customs/file/data/select/`,{step_id:serviceId}).then((res)=>{
            setFileData(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getFileData()
    }, []);


    return (
        <div className="scrollable-file-data">
            {/*{contextHolder}*/}
            <div style={{direction:"rtl"}}>
                <Form.List name="ness_data">
                    {(containers) => (
                        <>
                            {!loading?
                                fileData.map(({key, ...restField }) => (
                                <div key={restField.id}>
                                    {productFieldList.map((item)=>
                                        <div key={item.key}>
                                            <Form.Item
                                                {...restField}
                                                label={restField.name}
                                                name={[restField.id, item.name]}
                                                initialValue={item.init?restField.id:""}
                                                labelCol={{
                                                    span: 4,
                                                }}
                                                wrapperCol={{
                                                    span: 10,
                                                }}
                                                style={{marginRight:20,display:item.init?"none":""}}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: item.message,
                                                    },
                                                ]}
                                            >
                                                <Input placeholder={item.message}/>
                                            </Form.Item>
                                        </div>
                                    )}
                                </div>
                            )):<div>loading ... </div>}
                        </>
                    )}
                </Form.List>
            </div>
        </div>
    );
}

export default FileDataStep;
