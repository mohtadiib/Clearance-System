import Grid from '@mui/material/Grid';
import SettingsButtons from "../config/routers_buttons/buttons";
import settingsRoutes from "../config/routers_buttons/routers_settings";
import React from "react";


export default function ButtonsList({ call , index}) {
    return (
        <div>
            <h3>{settingsRoutes[index].title}</h3>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 5, sm: 4, md: 20 }}>
                {settingsRoutes[index].details.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <SettingsButtons
                            call={() => {
                                call(item);
                            }}
                            name={item.name}
                        />
                    </Grid>
                ))}
            </Grid>
            <br />
        </div>
    );
}
