import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';

const DialogueComp = ({ closeDialogueHanlder, setFlag }) => {

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    const handleClose = () => {
        closeDialogueHanlder(false);
    };

    const handleBoth = (status) => {
        setFlag(status);
        handleClose();

    }


    return (
        <Dialog
            open={true}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"

        >
            <DialogTitle id="alert-dialog-title">
                {"Are You sure to delete this Note?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={
                    () => { handleBoth(false) }
                }>Cancel</Button>
                <Button onClick={() => { handleBoth(true) }} autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog >
    )
}

export default DialogueComp;