import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import axios from "axios";
import {urlServer} from "../../../config/const";
import {errorMessage, succesMessage} from "../../../components/Notifications";
import {Delete} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";

export default function AlertDialog({open, handleClose}) {
    // const [open, setOpen] = React.useState(false);

    const [loading, setLoading] = useState(false);
    const deleteFile = async () => {
        setLoading(true);
        await axios.post(`${urlServer}delete/`,{table:"files",id:open.id} ).then((res) => {
            setLoading(false);
            if (res.data.msg){
                succesMessage()
                handleClose();
            }else {
                errorMessage()
            }
        });
    };


    return (
        <div>
            <Dialog
                open={open.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"حذف الملف"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        سيتم حذف الملف بالضغط على حذف
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>إلغاء</Button>
                    <LoadingButton
                        size="small"
                        style={{backgroundColor:"orangered", color:"white"}}
                        onClick={deleteFile}
                        endIcon={<Delete />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        <span>حذف</span>
                    </LoadingButton>
                    {/*<Button onLoadedData={loading} onClick={deleteFile} style={{backgroundColor:"orangered", color:"white"}} color="secondary">حذف</Button>*/}
                </DialogActions>
            </Dialog>
        </div>
    );
}
