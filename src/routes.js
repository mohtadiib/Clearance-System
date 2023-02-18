// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import AddFilesData from "layouts/files/add";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import Settings from "layouts/Settings";
import FilesShow from "./layouts/files";

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
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <FilesShow />,
  },
  {
    type: "collapse",
    name: "العملاء",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "التقارير",
    key: "files",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/files",
    component: <AddFilesData />,
  },
  {
    type: "collapse",
    name: "الإعدادات",
    key: "Settings",
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
