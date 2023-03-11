import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import * as React from "react";
import Footer from "../../examples/Footer";
import AxiosTable from "../tables/data/axios_table";
import Icon from "@mui/material/Icon";

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
            { name: "تاريخ الإنشاء", type: "date" },
            { name: "الحالة", type: "status" },
        ],
        // model: { id: "0", name: "", steps: [], is_active: "" },
        model: {
            id:"1",
            name:"",
            phone:"",
            username:"",
            password:"",
            type:[],
            create_at: "",
            status:"0"},
    }

function Clients() {
    return (
    <DashboardLayout>
        <DashboardNavbar />
        <AxiosTable tableModel={model} />
        <Footer />
    </DashboardLayout>
  );
}

export default Clients;
