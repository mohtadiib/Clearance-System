import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function SettingsButtons({ name, call }) {
  return (
      <Card sx={{ minHeight: 120 }}>
          <CardActionArea style={{borderRadius:10, minHeight: 120}} onClick={call}>
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
  );
}

export default SettingsButtons;
