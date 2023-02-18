import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import * as React from "react";
import Footer from "../../examples/Footer";
import AxiosTable from "../tables/data/axios_table";
import Icon from "@mui/material/Icon";
import MDTypography from "../../components/MDTypography";

const model = {
        name: "العملاء",
        key: "users",
        icon: <Icon fontSize="small">dashboard</Icon>,
        tableName: "users",
        headers: [
            { name: "الرقم", type: "" },
            { name: "الاسم", type: "" },
            { name: "رقم الهاتف", type: "" },
            { name: "اسم المستخدم", type: "" },
            { name: "كلمة المرور", type: "" },
            { name: "نوع الحساب",
                type: "local_select",
                selectList: [
                    {
                        value: 1,
                        label: "عميل",
                    },
                    {
                        value: 2,
                        label: "مستخدم",
                    },
                ]
            },
            { name: "تاريخ الإنشاء", type: "" },
            { name: "الحالة", type: "status" },
        ],
        // model: { id: "0", name: "", steps: [], is_active: "" },
        model: {
            id:"1",
            name:"",
            phone:"",
            username:"",
            password:"",
            type:"",
            create_at:"",
            status:"0"},
    }

function Billing() {
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

export default Billing;
