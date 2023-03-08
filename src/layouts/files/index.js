import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import {Link} from "react-router-dom";
import GetFiles from "./get/get-files";
import AlertDialog from "./components/dialog";

function FilesShow() {
    const [open, setOpen] = React.useState({open:false,id:""});

    const handleDelete = (id) => {
        setOpen({open:true,id:id})
    }
    const handleClose = () => {
        setOpen({open:false,id:""});
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
              <div >
                  <Link to="/file_add">
                      <MDButton variant="gradient" color="info">
                          <div style={{marginLeft:"5px"}}>إضافة</div>
                          <Icon>add</Icon>&nbsp;
                      </MDButton>
                  </Link>
                  <GetFiles xs={12} lg={3.5} deleteFile={handleDelete}/>
                  <AlertDialog open={open} handleClose={handleClose}/>
              </div>
            <Footer />
        </DashboardLayout>
    );
}

export default FilesShow;
