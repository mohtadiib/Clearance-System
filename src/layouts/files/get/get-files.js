import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import {Card, Skeleton} from "antd";
import {DeleteFilled, EditOutlined, SettingOutlined} from "@ant-design/icons";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MDBox from "../../../components/MDBox";
import axios from "axios";
import urlServer from "../../../config/const";
const { Meta } = Card;
let list = []
const GetFiles = ({form, xs, lg,selectable}) => {
    const [filesData, setFilesData] = useState([{},{},{},{},{},{}]);
    // const [selected,setSelected] = useState([]);
    const selectedFile = (id) =>{
        console.log(id)
        if (checkSelected(id)){
            // list = selected;
            const index = list.indexOf(id);
            if (index > -1) { // only splice array when item is found
                list.splice(index, 1); // 2nd parameter means remove one item only
            }
            // setSelected(list)
        }else {
            list.push(id)
            // setSelected(prevState => [...prevState, id])
        }
        form.setFieldValue("items_count", list.length);
        form.setFieldValue("files", list);
        // form.setF
    }

    const checkSelected = (id) => {
        return list.includes(id);
    }

    useEffect(() => {
        list = []
        getData();
    }, []);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        setLoading(true);
        await axios.get(`${urlServer}customs/file/get-all/` ).then((res) => {
            setFilesData(res.data);
            setLoading(false);
        });
    };

    const shippingType = (val) => {
        let shippingType = "";
        if(val === "1"){
            shippingType = "General Cargo";
        }else if(val === "2"){
            shippingType = "FCL";
        }else if(val === "3"){
            shippingType = "LCL";
        }
        return shippingType;
    }


    return (
        <div dir="rtl">
            <MDBox py={3}>
                <Grid container spacing={2}>
                    {filesData.map((file,index)=>
                        <Grid key={index} item xs={12} md={6} lg={3}>
                            <MDBox mb={1.5}>
                                <Link to={selectable?'':`/file_details/${file.file_id}`} >
                                    <Card
                                        onClick={()=> !selectable?null:selectedFile(file.id)}
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <DeleteFilled key="delete" />,
                                            <div>
                                                تفاصيل ..
                                            </div>,
                                        ]}
                                    >
                                        <Skeleton loading={loading} avatar active>
                                            <Meta
                                                avatar={
                                                    checkSelected(file.id)?
                                                        <CheckCircleIcon fontSize="large" color="success"/>:
                                                        <FolderSpecialIcon fontSize="large" color="secondary"/>
                                                }
                                                title={shippingType(file.shipping_type)}
                                                description={
                                                    <div>
                                                        <div>
                                                            {file.current_step}
                                                        </div>
                                                        <div>
                                                            3000 SDG
                                                        </div>
                                                    </div>
                                                }
                                            />
                                        </Skeleton>
                                    </Card>
                                </Link>
                            </MDBox>
                        </Grid>
                    )}
                </Grid>
            </MDBox>
        </div>
    );
};

export default GetFiles;
