import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import {Link} from "react-router-dom";
import GetFiles from "./get/get-files";

function FilesShow() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Link to="/file_add" >
                <MDButton variant="gradient" color="info">
                    <div style={{marginLeft:"5px"}}>اضافة</div>
                    <Icon>add</Icon>&nbsp;
                </MDButton>
            </Link>
            <GetFiles xs={12} lg={3.5}/>
            <Footer />
        </DashboardLayout>
    );
}

export default FilesShow;
