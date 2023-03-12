import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import { useNavigate} from "react-router-dom";
import { Empty, Skeleton} from "antd";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MDBox from "../../../components/MDBox";
import axios from "axios";
import {urlServer} from "../../../config/const";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardActions, CardContent, Divider, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
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
                <Grid container spacing={2} sx={{marginLeft:0}}>
                    {filesData.map((file, index) =>
                        <Grid key={index} item xs={12} md={6} lg={lg}>
                            <MDBox shadow={0} m={1}>
                                <Card elevation={50}>
                                    <CardActionArea
                                        style={{padding:20,borderRadius:10}}
                                        onClick={() => !selectable ? handleNavigate(file.file_id) : selectedFile(file.id)}
                                    >
                                        <MDBox display="flex">
                                            {!selectable ?
                                                <FolderSpecialIcon fontSize="large" color="secondary"/>:
                                                checkSelected(file.id) ?
                                                    <CheckCircleIcon fontSize="large" color="success"/> :
                                                    <FolderSpecialIcon fontSize="large" color="secondary"/>}
                                           <MDBox m={1}>
                                               <Typography variant="h5" component="div" color="text.secondary">
                                                   {shippingType(file.shipping_type)}
                                               </Typography>
                                           </MDBox>
                                        </MDBox>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {file.current_step}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3000 SDG
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    {selectable?
                                        null:<CardActions>
                                        <IconButton aria-label="share">
                                            <DeleteIcon color="error"/>
                                        </IconButton>
                                    </CardActions>}
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
