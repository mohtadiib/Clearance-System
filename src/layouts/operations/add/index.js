import {
    Form,
} from 'antd';
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDTypography from "../../../components/MDTypography";
import Footer from "../../../examples/Footer";
import * as React from "react";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import Grid from "@mui/material/Grid";
import AddOperationData from "./add-operation";
import GetFiles from "../../files/get/get-files";
import {urlServer} from "../../../config/const";
import axios from "axios";
import {useState} from "react";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {succesMessage} from "../../../components/Notifications";

export default function AddOperation(){
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [loading,setLoading] = useState()

    const handleClick = async ()=> {
        const body = {
            base_data:{
                user_id:form.getFieldValue("user"),
                total:form.getFieldValue("total"),
                items_count: form.getFieldValue("items_count")
            },
            files: form.getFieldValue("files")
        }
        setLoading(true)
        await axios.post(`${urlServer}customs/operations/insert/`,body).then((res)=> {
            console.log("res.data")
            console.log(res.data)
        setLoading(false)
            succesMessage()
            navigate("/operations")
        }).catch((err)=>{
            setLoading(false)
        })
        console.log("operations body")
        console.log(body)

    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div style={{marginTop:"1%"}}>
                <Form
                    form={form}
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    initialValues={{
                        user: [],
                    }}
                    layout="horizontal"
                >
                    <Grid style={{ height:500}}
                          container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <MDTypography
                                variant="h4"
                                color="secondary"
                                fontWeight="medium"
                                style={{ display: "inline" }}
                            >
                                بيانات العملية
                            </MDTypography>
                            <AddOperationData form={form}/>
                        </Grid>
                        <Grid item xs={6}>
                            <MDTypography
                                variant="h4"
                                color="secondary"
                                fontWeight="medium"
                                style={{ display: "inline" }}
                            >
                                اختر ملفات
                            </MDTypography>
                            <div className="scrollable-file-data">
                                <GetFiles form={form} xs={12} lg={6} selectable />
                            </div>
                            <Form.Item name="files" >
                                <div></div>
                            </Form.Item>
                        </Grid>
                    </Grid>
                    <Box sx={{width:"30%"}}>
                        <LoadingButton
                            fullWidth
                            size="large"
                            onClick={handleClick}
                            endIcon={<SaveIcon xs={12} lg={6} style={{transform: "scaleX(-1)"}}/>}
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                            disableElevation
                            style={{color:"white"}}
                        >
                            <span>حفظ العملية</span>
                        </LoadingButton>
                    </Box>
                </Form>
            </div>
            <Footer />
        </DashboardLayout>
    );
};
