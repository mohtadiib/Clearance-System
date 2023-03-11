import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React from "react";
import Box from "@mui/material/Box";
// eslint-disable-next-line import/no-cycle
import ButtonsList from "./buttons-list";
import {useNavigate} from "react-router-dom";

function Settings() {
  const navigate = useNavigate()
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <div >
            <Box sx={{ width: "100%", typography: "body1" }}>
                <>
                    <ButtonsList
                        index={0}
                        call={(val) => {
                            navigate(`/Setting_details/${0}/${val}`)
                        }}
                    />
                    <ButtonsList
                        index={1}
                        call={(val) => {
                            navigate(`/Setting_details/${1}/${val}`)
                        }}
                    />
                </>
            </Box>
        </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Settings;
