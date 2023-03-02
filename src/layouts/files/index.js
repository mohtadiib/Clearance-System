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
              <div >
                  <div style={{marginBottom:20,width:200}}>
                      <Link to="/file_add">
                          <MDButton variant="gradient" color="info">
                              <div style={{marginLeft:"5px"}}>إضافة</div>
                              <Icon>add</Icon>&nbsp;
                          </MDButton>
                      </Link>
                  </div>
                  <GetFiles xs={12} lg={3.5}/>
              </div>
            <Footer />
        </DashboardLayout>
    );
}

export default FilesShow;
