import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import * as React from "react";
import Footer from "../../examples/Footer";
import AxiosTable from "../tables/data/axios_table";
import Icon from "@mui/material/Icon";
import MDTypography from "../../components/MDTypography";

const model = {
    name: "العمليات",
    key: "users",
    icon: <Icon fontSize="small">dashboard</Icon>,
    tableName: "operations",
    addButton: "/add_operation",
    headers: [
        { name: "الرقم", type: "" },
        { name: "رقم العملية", type: "" },
        { name: "العميل", type: "" },
        { name: "الإجمالي", type: "" },
        { name: "عدد الملفات", type: "" },
        { name: "تاريخ الإنشاء", type: "" },
        { name: "تاريخ التحديث", type: "" },
        { name: "الحالة", type: "status" },
    ],
    model: {
        id:"1",
        user_id:"",
        total:"",
        items_count:"",
        create_at: "",
        update_at: "",
        status:"0"
    },
}

function Operations() {
    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini />
            <div style={{marginTop:"5%"}}>
                <div>
                    <MDTypography
                        variant="h4"
                        color="secondary"
                        fontWeight="medium"
                        style={{ display: "inline" }}
                    >
                        {model.name}
                    </MDTypography>
                </div>
                <div style={{marginTop:"1%"}}>
                    <AxiosTable tableModel={model} />
                </div>
            </div>
            <Footer />
        </DashboardLayout>
    );
}

export default Operations;
