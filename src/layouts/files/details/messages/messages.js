import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import MDBox from "../../../../components/MDBox";

export default function TimelineMessages() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    maxWidth="10%"
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <EmailIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                    width="80%"
                    sx={{ py: '12px', px: 2 }}>
                    <Typography>
                        طلب إرسال مستند (اصل)
                    </Typography>
                    <Typography variant="h6" component="span">الرجاء إرسال مستند بوليصة الشحن في اسرع وقت</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
