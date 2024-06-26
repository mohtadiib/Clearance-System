import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import typography from "assets/theme/base/typography";

function Footer({ light, width = "90%" }) {
  const { size } = typography;

  return (
      <MDBox position="absolute" width={width} bottom={0} py={4}>
        <Container>
          <MDBox
              flexDirection={{ xs: "column", lg: "row" }}
              alignItems="center"
          >
            <MDBox
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                color={light ? "white" : "text"}
                fontSize={size.sm}
            >
              &copy; {new Date().getFullYear()}, Full Stack Developer
              <Link href="https://www.creative-tim.com/" target="_blank">
                <MDTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
                  &nbsp;Mohtady Behairy&nbsp;
                </MDTypography>
              </Link>
              Developed By
            </MDBox>
          </MDBox>
        </Container>
      </MDBox>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
