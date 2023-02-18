// Material Dashboard 2 React config
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example config
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Overview page config
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// eslint-disable-next-line import/no-cycle
import ButtonsList from "./buttons-list";
import AxiosTable from "../tables/data/axios_table";

function Settings() {
  const [value, setValue] = useState("1");
  const [model, setModel] = useState({});
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <div >
            {value === "1" ? (
                <div />
            ) : (
                <div>
                    <MDTypography
                        variant="h6"
                        color="secondary"
                        fontWeight="medium"
                        style={{ display: "inline" }}
                    >
                        {"الاعدادات/ "}
                    </MDTypography>
                    <MDTypography
                        variant="h6"
                        color="secondary"
                        fontWeight="medium"
                        style={{ display: "inline" }}
                    >
                        {model.name}
                    </MDTypography>
                </div>
            )}
            <Box sx={{ width: "100%", typography: "body1" }}>
                {value === "2" ? (
                    <div>
                        <IconButton
                            onClick={() => setValue("1")}
                            style={{ display: "inline" }}
                            aria-label="delete"
                            size="large"
                        >
                            <ArrowForwardIcon fontSize="inherit" />
                        </IconButton>
                        <MDTypography variant="h4" fontWeight="medium" style={{ display: "inline" }}>
                            {model.name}
                        </MDTypography>
                    </div>
                ) : null}
                {value === "1" ?
                   <>
                       <ButtonsList
                           index={0}
                           call={(val) => {
                               setValue("2");
                               setModel(val);
                           }}
                       />
                       <ButtonsList
                           index={1}
                           call={(val) => {
                               setValue("2");
                               setModel(val);
                           }}
                       />
                   </>
                    :
                    <AxiosTable tableModel={model} />}
            </Box>
        </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Settings;
