// Material Dashboard 2 React config
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example config
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Overview page config
import Header from "layouts/Settings/config/Header";
import { Col, Row } from "antd";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// eslint-disable-next-line import/no-cycle
import SettingsButtons from "./config/routers_buttons/buttons";
import settingsRoutes from "./config/routers_buttons/routers_settings";
import AxiosTable from "../tables/data/axios_table";
// eslint-disable-next-line no-unused-vars,react/prop-types
function ButtonsList({ call }) {
  return (
    <Row>
      <Col span={18} push={6}>
        <SettingsButtons
          call={call}
          title={settingsRoutes[1].title}
          details={settingsRoutes[1].details}
        />
      </Col>
      <Col span={6} pull={18}>
        <SettingsButtons
          call={call}
          title={settingsRoutes[0].title}
          details={settingsRoutes[0].details}
        />
      </Col>
    </Row>
  );
}
function Settings() {
  const [value, setValue] = useState("1");
  const [model, setModel] = useState({});
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          {value === "1" ? (
            <div>
              <MDTypography variant="h6" fontWeight="medium">
                الاعدادات
              </MDTypography>
              <MDBox mb={1}>
                <MDTypography variant="button" color="text">
                  قم بإدخال الاعدادات الاساسية التي سيتم تكرار استخدامها في ادخال الملفات
                </MDTypography>
              </MDBox>
            </div>
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
            <TabContext value={value}>
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
              <TabPanel value="1">
                <ButtonsList
                  call={(val) => {
                    setValue("2");
                    setModel(val);
                  }}
                />
              </TabPanel>
              <TabPanel value="2">
                <AxiosTable tableModel={model} />
              </TabPanel>
            </TabContext>
          </Box>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Settings;
