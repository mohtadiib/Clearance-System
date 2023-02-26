import { useState } from "react";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/shipping.jpeg";
import logoImage from "assets/images/shipping-logo.png";
import {useMaterialUIController} from "../../../context";

function Basic({ transparent }) {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <BasicLayout image={bgImage}>
      <MDBox
          borderRadius="lg"
          sx={({
                   palette: { transparent: transparentColor, white, background },
                   functions: { rgba },
               }) => ({
              backgroundColor: transparent
                  ? transparentColor.main
                  : rgba(darkMode ? background.sidenav : white.main, 0.9),
              backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          })}
      >
        <MDBox
          borderRadius="lg"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDBox component="img" src={logoImage} alt="Brand" width="8rem" />
          <MDTypography variant="h6" fontWeight="medium" color="info" mt={1}>
            تسجيل الدخول
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="number" label="رقم الهاتف" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="كلمة المرور" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;تذكرني في المرة القادمة
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                تسجيل الدخول
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </BasicLayout>
  );
}

export default Basic;
