import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

const ToastComp = ({
  severity,
  text,
  closeToastHanlder,
  vertical,
  horizontal,
}) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    closeToastHanlder(false);
  };
  return (
    <Snackbar
      open={true}
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      {
        <Alert sx={{ width: "100%" }} onClose={handleClose} severity={severity}>
          {text}
        </Alert>
      }
    </Snackbar>
  );
};

export default ToastComp;
