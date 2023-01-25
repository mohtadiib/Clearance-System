import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Skeleton } from 'antd';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import urlServer from "../../config/const";
import MDBox from "../../components/MDBox";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
const { Meta } = Card;
// eslint-disable-next-line react/prop-types,no-unused-vars
function FilesShow() {
    const [filesData, setFilesData] = useState([]);
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        getData();
    }, []);
    const [loading, setLoading] = useState(false);
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
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Link to="/file_add" >
                <MDButton variant="gradient" color="info">
                    <div style={{marginLeft:"5px"}}>اضافة</div>
                    <Icon>add</Icon>&nbsp;
                </MDButton>
            </Link>

            <MDBox py={3}>
                <Grid container spacing={3}>
                    {filesData.map((file)=>
                        <Grid item xs={12} lg={3.5}>
                            <Link to={`/file_details/${file.file_id}`} >
                                <Card
                                    style={{
                                        width: 300,
                                        marginTop: 16,
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
                                            avatar={<FolderSpecialIcon fontSize="large" color="secondary"/>}
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
            <Footer />
        </DashboardLayout>
    );
}

export default FilesShow;
