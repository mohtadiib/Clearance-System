// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// @mui material config
// Material Dashboard 2 React config
import MDBox from "components/MDBox";
// Images
import Box from "@mui/material/Box";

function Header({ children }) {
  return (
    <MDBox position="relative" mb={5}>
        {children}
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
