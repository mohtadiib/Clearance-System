import React, {useState} from 'react';
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from '@mui/icons-material/Send';
import TimelineContent from "@mui/lab/TimelineContent";
import {LoadingButton } from "@mui/lab";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function MessageItem({message}) {

    const [loading,setLoading] = useState(false)
    const handleClick = () => {
        setLoading(false)
    }

    return (
        <div style={{display:"flex"}}>
            <TimelineSeparator>
                <TimelineDot color="grey">
                    <EmailIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <Paper square elevation={0} sx={{ p: 2,m: 1, borderRadius: 2 , width: "100%" }}>
                <TimelineContent >
                    <div style={{display: "flex"}}>
                        <div style={{textAlign:"right",width:"80%",fontSize:13,fontWeight:"bold"}}>
                            طلب إرسال مستند (
                            {message})
                        </div>
                        <Box
                            style={{textAlign:"left",width:"20%", fontSize: 15}}
                            color="text.secondary"
                        >
                            9:30 am
                        </Box>
                    </div>
                    <Box
                        style={{fontSize: 12,padding:5}}
                        color="text.secondary"
                    >
                        الرجاء إرسال مستند {message} الشحن في اسرع وقت
                    </Box>
                </TimelineContent>
                <div style={{textAlign:"left"}}>
                    <LoadingButton
                        size="small"
                        onClick={handleClick}
                        endIcon={<SendIcon style={{transform: "scaleX(-1)"}}/>}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        style={{color:"white"}}
                    >
                        <span>إرسال</span>
                    </LoadingButton>
                </div>
            </Paper>
        </div>
    );
}

export default MessageItem;
