// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

const { white, black ,grey, info } = colors;

const stepIcon = {
  styleOverrides: {
    root: {
      background: white.main,
      fill: grey.main,
      borderRadius: "50%",
      width:20,
      height:20,
      // fontSize:25,
      fontColor:white,

      "&.Mui-active": {
        background: white.main,
        fill: info.opacity,
        borderRadius: "50%",
        width:20,
        height:20,
        // fontSize:25,
        fontColor:white,
      },

      "&.Mui-completed": {
        background: white.main,
        fill: info.main,
        borderRadius: "50%",
        width:20,
        height:20,
        // fontSize:25,
        fontColor:white,
      },
    },
  },
};

export default stepIcon;
