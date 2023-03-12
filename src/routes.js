// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Clients from "layouts/clients";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import Settings from "layouts/Settings";
import FilesShow from "./layouts/files";
import Operations from "./layouts/operations/operations";

const routes = [
  {
    type: "collapse",
    name: "الرئيسية",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "الملفات",
    subRoute:["file_details/"],
    key: "files",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/files",
    component: <FilesShow />,
  },
  {
    type: "collapse",
    name: "العمليات",
    subRoute:["/add_operation"],
    key: "operations",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/operations",
    component: <Operations />,
  },
  {
    type: "collapse",
    name: "العملاء",
    key: "clients",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/clients",
    component: <Clients />,
  },
  // {
  //   type: "collapse",
  //   name: "التقارير",
  //   key: "files",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/files",
  //   component: <AddFilesData />,
  // },
  {
    type: "collapse",
    name: "الإعدادات",
    key: "Settings",
    subRoute:["Setting_details//"],
    icon: <Icon fontSize="small">person</Icon>,
    route: "/Settings",
    component: <Settings />,
  },
  {
    type: "collapse",
    name: "تسجيل الخروج",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
