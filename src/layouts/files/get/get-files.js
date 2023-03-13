import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import { useNavigate} from "react-router-dom";
import { Empty } from "antd";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MDBox from "../../../components/MDBox";
import axios from "axios";
import {urlServer} from "../../../config/const";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardActions, Divider, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Skeleton from "@mui/material/Skeleton";
import MDTypography from "../../../components/MDTypography";
let list = []

const GetFiles = ({form, lg,selectable, deleteFile}) => {
    const [filesData, setFilesData] = useState([{},{},{},{},{},{}]);
    const navigate = useNavigate()
    const [selected,setSelected] = useState([]);
    const selectedFile = (fileId) => {
        const id = +fileId;
        if (checkSelected(id)){
            const index = list.indexOf(id);
            if (index > -1) { // only splice array when item is found
                list.splice(index, 1); // 2nd parameter means remove one item only
            }
            setSelected([list])
            }else{
                list.push(id)
                setSelected([list])
            }
            form.setFieldValue("items_count", list.length);
            form.setFieldValue("files", selected);
            // form.setF
    }

    const checkSelected = (fileId) => {
        const id = +fileId;
        return list.includes(id);
    }

    useEffect(() => {
        // list = []
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

    const handleDelete = (id) => {
        deleteFile(id)
    }

    const handleNavigate = (file_id) => {
        navigate(selectable?'':`/file_details/${file_id}`)
    }

    return (
        <div dir="rtl">
            {!loading && !filesData.length?
                <div style={{marginTop:"10%"}}>
                    <Empty description="لا توجد ملفات"/>
                </div>
                :<MDBox py={3}>
                <Grid container spacing={2} sx={{marginLeft:0, width:"100%"}}>
                    {filesData.map((file, index) =>
                        <Grid key={index} item xs={12} md={6} lg={lg}>
                            <MDBox m={1}>
                                <Card >
                                    <CardActionArea
                                        style={{
                                            padding:20,
                                            borderTopLeftRadius:10,
                                            borderTopRightRadius:10,
                                            borderBottomRightRadius:selectable?10:0,
                                            borderBottomLeftRadius:selectable?10:0,
                                            maxHeight:130
                                         }}
                                        onClick={() => loading?null:!selectable ? handleNavigate(file.file_id) : selectedFile(file.id)}
                                    >
                                        <MDBox display="flex">
                                            {loading?<Skeleton width={40} height={50}/>:!selectable ?
                                                <FolderSpecialIcon fontSize="large" color="secondary"/>:
                                                checkSelected(file.id) ?
                                                    <CheckCircleIcon fontSize="large" color="success"/> :
                                                    <FolderSpecialIcon fontSize="large" color="secondary"/>}
                                           <MDBox m={1}>
                                               <MDTypography style={{fontSize:15}}>
                                                   {file.supplier_name}
                                               </MDTypography>
                                               <MDTypography fontWeight="bold" textTransform="uppercase" style={{fontSize:15}}>
                                                   {shippingType(file.shipping_type)}
                                               </MDTypography>
                                           </MDBox>
                                        </MDBox>
                                        <Divider style={{marginTop:0.5}}/>
                                        <MDBox display="flex" >
                                            <Typography style={{fontSize:12}} ml={4} textAlign="right" variant="body2" color="text.secondary">
                                                {loading?<Skeleton width="100%"/>:file.current_step} -
                                            </Typography>
                                            <Typography style={{fontSize:15}} ml={1} textAlign="right" variant="body2" color="text.secondary">
                                                {loading?<Skeleton width="100%"/>:"3000 SDG"}
                                            </Typography>
                                        </MDBox>
                                    </CardActionArea>
                                    {selectable?
                                        null:
                                        <CardActions style={{maxHeight:40}}>
                                            {loading?<Skeleton width="10%"/>:
                                                <IconButton aria-label="share">
                                                <DeleteIcon onClick={() => handleDelete(file.id)}/>
                                            </IconButton>}
                                        </CardActions>
                                    }
                                </Card>
                               {/* <Card
                                    actions={[
                                        <SettingOutlined key="setting"/>,
                                        <DeleteFilled key="delete" onClick={() => {
                                            handleDelete(file.id)
                                        }}/>,
                                        <div
                                            onClick={() => !selectable ? handleNavigate(file.file_id) : selectedFile(file.id)}
                                        >
                                            تفاصيل ..
                                        </div>,
                                    ]}
                                >
                                    <Skeleton loading={loading} avatar active>
                                        <Meta
                                            avatar={
                                                !selectable ?
                                                    <FolderSpecialIcon fontSize="large" color="secondary"/>:
                                                checkSelected(file.id) ?
                                                    <CheckCircleIcon fontSize="large" color="success"/> :
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
                                </Card>*/}
                            </MDBox>
                        </Grid>
                    )}
                </Grid>
            </MDBox>
            }
        </div>
    );
};

export default GetFiles;
