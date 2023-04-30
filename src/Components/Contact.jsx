import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Box, Typography } from "@mui/material";
import FormComp from "./FormComp";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactValidationSchema } from "./schemas";

const initialValues = {
  email: "",
  msg: "",
};
const Contact = () => {
  // const [details, setDetails] = useState({
  //     email: "",
  //     msg: ""
  // })

  // const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
  //     initialValues: initialValues,
  //     validationSchema: contactValidationSchema,
  //     onSubmit: (values) => {
  //         // console.log(values);
  //     }
  // })
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mb: 3, fontSize: "1.5rem", flex: 0 }}
      >
        Contact Us!
      </Typography>
      <FormComp />
    </Box>
  );
};

export default Contact;
