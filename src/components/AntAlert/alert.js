import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertApp({open, setOpen}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    variant="filled" severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    برجاء اكمال المستندات المفقودة!
                </Alert>
            </Collapse>
        </Box>
    );
}
