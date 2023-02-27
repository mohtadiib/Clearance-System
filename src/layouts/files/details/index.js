import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import TimelineMessages from "./messages/messages";
import FilesDetails from "./file_details";
import AlertApp from "../../../components/AntAlert/alert";
import {useState} from "react";

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
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={8}>
                        <FilesDetails nextError={nextError}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TimelineMessages />
                    </Grid>
                </Grid>
            </Box>
        </DashboardLayout>
    );
}
