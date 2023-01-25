// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ModalShow from "../files/details/components/modal";
import Button from "@mui/material/Button";
import {useState} from "react";
// import CardMedia from "../../assets/theme/components/card/cardMedia";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import SimpleBlogCard from "../../examples/Cards/BlogCards/SimpleBlogCard";
import AlertApp from "../../components/AntAlert/alert";
// import UploadFile from "../files/details/components/uplaod";

function Billing() {
    // const [open, setOpen] = useState(false);

    return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
        <div style={{marginTop:"20%"}}>
            <AlertApp />
        </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
