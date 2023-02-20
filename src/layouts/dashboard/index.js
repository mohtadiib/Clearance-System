// @mui material config
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React config
import MDBox from "components/MDBox";

// Material Dashboard 2 React example config
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <div dir="ltr">
            <MDBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="dark"
                                icon="weekend"
                                title="عدد العملاء"
                                count={281}
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
                                icon="leaderboard"
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
                                color="success"
                                icon="store"
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
                                color="primary"
                                icon="person_add"
                                title="عدد الملفات"
                                count="3"
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
