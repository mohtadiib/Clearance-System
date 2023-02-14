import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect} from "react";

export default function AlertApp({open, setOpen}) {
    useEffect(() => {
       if (open.open){
           setTimeout(()=>{
               setOpen({open:false, value:""});
           }, 3000)
       }
    }, [open]);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open.open}>
                <Alert
                    variant="filled" severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen({open:false,value:""});
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    اكمل المستندات الناقصة {open.value}
                </Alert>
            </Collapse>
        </Box>
    );
}
