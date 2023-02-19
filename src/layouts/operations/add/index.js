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

export default function AddOperation(){

    const [form] = Form.useForm();

    const handleClick =()=> {
        console.log("form.getFieldsValue")
        console.log(form.getFieldsValue())
    }

    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini />
            <div style={{marginTop:"5%"}}>
                <div>
                    <MDTypography
                        variant="h4"
                        color="secondary"
                        fontWeight="medium"
                        style={{ display: "inline" }}
                    >
                        عملية جديدة
                    </MDTypography>
                </div>
                <div style={{marginTop:"1%"}}>
                    <Form
                        form={form}
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        initialValues={{
                            user: [],
                        }}
                        layout="horizontal"
                    >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <AddOperationData form={form}/>
                            </Grid>
                            <Grid item xs={6}>
                                <GetFiles selectable />
                            </Grid>
                        </Grid>
                    </Form>
                    <LoadingButton
                        size="large"
                        onClick={handleClick}
                        endIcon={<SaveIcon xs={12} lg={6} style={{transform: "scaleX(-1)"}}/>}
                        loading={false}
                        loadingPosition="end"
                        variant="contained"
                        style={{color:"white"}}
                    >
                        <span>حفظ العملية</span>
                    </LoadingButton>
                </div>
            </div>
            <Footer />
        </DashboardLayout>
    );
};
