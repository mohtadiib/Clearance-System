import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import docsLink from "../../../../../config/docs_link";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalShow({open, handleClose}) {

    return (
        <div>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{""}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <img src={docsLink+open.imgPath} width="90%" alt="Italian Trulli" />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
