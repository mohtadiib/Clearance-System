import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import TimelineMessages from "./messages/messages";
import FilesDetails from "./file_details";
import AlertApp from "../../../components/AntAlert/alert";
import {useState} from "react";
import MDTypography from "../../../components/MDTypography";

export default function IndexFileDetails() {

    const [alert, setAlert] = useState({open:false,value:""});
    const nextError = (value) => {
        if (value){
            setAlert({open: true, value: value})
        }
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <AlertApp open={alert} setOpen={setAlert} />
            <Grid container spacing={3}>
                <Grid item xs={12} md={2} lg={7}>
                    <FilesDetails nextError={nextError}/>
                </Grid>
                <Grid className="hidden-mobile" item xs={12} md={6} lg={5}>
                    <Box sx={{marginLeft:3}}>
                        <MDTypography variant="h5" fontWeight="medium" >
                            الرسائل
                        </MDTypography>
                    </Box>
                    <TimelineMessages />
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}
