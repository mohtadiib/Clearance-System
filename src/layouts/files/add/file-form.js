/* eslint-disable react/prop-types,no-unused-vars,no-console,import/no-cycle */
import React, { useContext, useState } from "react";
import { Form, theme } from "antd";
import axios from "axios";
import { FileContext } from "./index";
import {useNavigate} from "react-router-dom";
import StepsComponent from "./file-components/steps-component";
import urlServer from "../../../config/const";
import {succesMessage} from "../../../components/Notifications";
import stepsList from "./file-components/steps-list";

const formData = {
    main: {},
    ness_data: "",
    containers: "",
    products: ""
};

function FileForm({loadingGet}) {

    const [componentSize, setComponentSize] = useState("default");
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    const formFile = useContext(FileContext);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const sendData = (shippingType,values) => {
        if (current === 0) {
            formData.main = values;
        } else if (current === 1) {
            formData.ness_data = JSON.stringify(values.ness_data);
        }else if (current === 2) {
            if (+shippingType !== 2){
                formData.products = JSON.stringify(values.products);
                sendToDb()
            }else {
                formData.containers = JSON.stringify(values.containers);
            }

        } else if (current === 3) {
            formData.products = JSON.stringify(values.products);
            sendToDb()
        }

        console.log("formData")
        console.log(formData)
    };

    async function sendToDb(){
        setLoading(true)
        await axios
            .post(`${urlServer}customs/file/insert/`, {
                data: formData,
            })
            .then((res) => {
                setLoading(false)
                console.log("send data res ");
                console.log(res.data);
                succesMessage()
                navigate("/tables")
            });
    }

    const next = (values) => {
        const shippingType = formFile.form.getFieldValue("shipping_type")
        sendData(shippingType, values);
        if (current < stepsList(()=>{}, +shippingType).length - 1){
            setCurrent(current + 1);
        }
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const onfinish = (values) => {
        console.log("getFieldsValue")
        console.log(values)
        console.log("current")
        console.log(current)
        next(values)
    }

    return (
        <div>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                form={formFile.form}
                onFinish={onfinish}
            >
                <StepsComponent
                    current={current}
                    prev={prev}
                    loading={loading}
                    loadingGet={loadingGet}
                />
            </Form>
        </div>
    );
}

export default FileForm;
