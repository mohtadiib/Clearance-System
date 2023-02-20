import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import {Card, Skeleton} from "antd";
import {EditOutlined, SettingOutlined} from "@ant-design/icons";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MDBox from "../../../components/MDBox";
import axios from "axios";
import urlServer from "../../../config/const";
const { Meta } = Card;
let list = []
const GetFiles = ({form, xs, lg,selectable}) => {
    const [filesData, setFilesData] = useState([]);
    // const [selected,setSelected] = useState([]);
    useEffect(()=>{
        list = []
    },[])
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
        // eslint-disable-next-line no-use-before-define
        getData();
    }, []);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        setLoading(true);
        setFilesData([]);
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        await axios.post(urlServer, { table: "files" }).then((res) => {
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
    // <Grid item xs={12} lg={6}>

    return (
        <MDBox py={0}>
            <Grid container spacing={3}>
                {filesData.map((file,index)=>
                    <Grid key={file.id} item xs={xs} lg={lg}>
                        <Link to={selectable?'':`/file_details/${file.file_id}`} >
                            <Card
                                onClick={()=> selectedFile(file.id)}
                                style={{
                                    opacity:selectable?checkSelected(file.id)?1:.5:1,
                                    width: 300,
                                    marginTop: 0,
                                }}
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <div>
                                        ختام التفاصيل
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
                                                    ختام التفاصيل
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
                    </Grid>
                )}
            </Grid>
        </MDBox>
    );
};

export default GetFiles;
