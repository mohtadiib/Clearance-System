// @mui material config
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React config
import MDBox from "components/MDBox";

// Material Dashboard 2 React example config
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {urlServer} from "../../config/const";

function Dashboard() {
    const [items, setItems] = useState({files:0,users:0});
    const [loading, setLoading] = useState(false);
    const tablesList = ["files", "users"];
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const getData = async () => {
        setLoading(true);
        await axios.post(`${urlServer}mult_table/get_length/`, JSON.stringify(tablesList)).then((res) => {
            setItems(res.data);
            setLoading(false);
        });
    };

    return (
    <DashboardLayout>
      <DashboardNavbar />
        <div dir="ltr">
            <MDBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                loading={loading}
                                color="dark"
                                icon="group_icon"
                                title="عدد العملاء"
                                count={items.users}
                                percentage={{
                                    color: "success",
                                    amount: "0",
                                    label: "معدل الزيادة من الأسبوع الفائت",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                loading={loading}
                                icon="folder_copy_icon"
                                title="إجمالي الملفات"
                                count="0"
                                percentage={{
                                    color: "success",
                                    amount: "0",
                                    label: "معدل الزيادة من الأسبوع الفائت",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                loading={loading}
                                color="success"
                                icon="account_balance_walletIcon"
                                title="إجمالي العهد"
                                count="0"
                                percentage={{
                                    color: "success",
                                    amount: "0",
                                    label: "معدل الزيادة من الأسبوع الفائت",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                loading={loading}
                                color="dark"
                                icon="folder_zip_icon"
                                title="عدد الملفات"
                                count={items.files}
                                percentage={{
                                    color: "success",
                                    amount: "0",
                                    label: "معدل الزيادة من الأسبوع الفائت",
                                }}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
        </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
