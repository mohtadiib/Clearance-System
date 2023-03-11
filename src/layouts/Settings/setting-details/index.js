// Material Dashboard 2 React config
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AxiosTable from "../../tables/data/axios_table";
import settingsRoutes from "../config/routers_buttons/routers_settings";
import {useNavigate, useParams} from "react-router-dom";

export default function SettingDetails() {
    const {listIndex, modelIndex} = useParams()
    const navigate = useNavigate()
    const getModel = () => {
        if (+modelIndex === 0 ){
            return  settingsRoutes[listIndex].details[0]
        }else {
            return  settingsRoutes[listIndex].details.find((_,index)=> index === +modelIndex)
        }
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div >
                <Box sx={{width: "100%", typography: "body1"}}>
                    <AxiosTable tableModel={getModel()}/>
                </Box>
            </div>
            <Footer />
        </DashboardLayout>
    );
}
