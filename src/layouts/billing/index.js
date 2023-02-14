import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import * as React from "react";
import CustomizedTimeline from "../files/details/messages/messages";
import Footer from "../../examples/Footer";

function Billing() {
    return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
        <div >
            <CustomizedTimeline />
        </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
