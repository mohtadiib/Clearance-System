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
                  <Link to="/file_add/new">
                      <MDButton variant="gradient" color="info">
                          <div style={{marginLeft:"5px"}}>إضافة</div>
                          <Icon>add</Icon>&nbsp;
                      </MDButton>
                  </Link>
                  <div className="scrollable-files">
                      <GetFiles lg={3} deleteFile={handleDelete}/>
                  </div>
                  <AlertDialog open={open} handleClose={handleClose}/>
              </div>
            <Footer />
        </DashboardLayout>
    );
}

export default FilesShow;
