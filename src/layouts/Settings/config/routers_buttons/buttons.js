import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function SettingsButtons({ name, call }) {
  return (
    <div>
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea style={{borderRadius:10}} onClick={call}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            قم باعداد بيانات {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    </div>
  );
}

export default SettingsButtons;
