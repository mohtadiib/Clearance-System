/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import rgba from "assets/theme/functions/rgba";

const { size, fontWeightBold, fontWeightRegular } = typography;
const { black, grey } = colors;

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs*2,
      color: grey,
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightBold} !important`,
        color: `${rgba(black.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightBold} !important`,
        color: `${rgba(black.main, 0.8)} !important`,
        fontSize: size.xs*2,
      },
    },
  },
};

export default stepLabel;
