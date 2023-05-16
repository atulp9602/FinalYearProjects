import { Box, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import AvtarComp from "../AvtarComp";

const YupValidation = () => {
  const VotePanRef = useRef(null);
  const fileRef = useRef(null);
  const navigate = useNavigate();

  //Validation schema
  const profileValidation = Yup.object().shape({
    name: Yup.string().required("Please, Enter Your Name !!"),
    age: Yup.number()
      .required("Please, Enter your age !!")
      .typeError("It must be Number !!"),
    file: Yup.mixed()
      .nullable()
      .test(
        "fileSize",
        "This file is too large",
        (file) =>
          //1kb = 1024bytes //1mb = 1024kb
          !file || (file && file.size <= 1024 * 1024)
      )
      .test(
        "fileType",
        "Only the following formats are accepted: .jpeg, .jpg, .png",
        (file) =>
          !file || ["image/png", "image/jpg", "image/jpeg"].includes(file?.type)
      ),

    panNumber: Yup.string().when("age", {
      is: (age) => age >= 18,
      then: () =>
        Yup.string()
          .required("Please, Provide Your Pancard Number !! ")
          .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, {
            message: "Invalid Pan Number !!",
          }),
    }),
    voteNumber: Yup.string().when("age", {
      is: (age) => age >= 18,
      then: () =>
        Yup.string()
          .required("Please, Provide Your VoterId !! ")
          .matches(/^[A-Z]{3}[0-9]{7}$/, { message: "Invalid Voter ID !!" }),
    }),
  });

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" textAlign="center" sx={{ p: 2 }}>
        Yup Validation Examples
      </Typography>
      <Box sx={{ flex: 1 }}>
        <Formik
          initialValues={{
            name: "",
            age: "",
            file: null,
            voteNumber: "",
            panNumber: "",
          }}
          onSubmit={(values) => {
            navigate("/Projects/PreviewForm", {
              state: { profileData: values, imgData: values.file },
            });
            console.log(values.file);
          }}
          validationSchema={profileValidation}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            touched,
            errors,
            values,
            setFieldValue,
            isSubmitting,
            handleReset,
          }) => (
            <Form
              className="container border border-dark-subtle bg-light p-3"
              onSubmit={handleSubmit}
              onReset={handleReset}
              noValidate
            >
              {/* //image  */}
              <Row className="mx-auto">
                <Box>{<AvtarComp file={values.file} />}</Box>

                <Form.Group
                  as={Col}
                  controlId="formFileSm"
                  md="3"
                  className="mb-3 mx-auto"
                >
                  <Form.Control
                    type="file"
                    size="sm"
                    name="file"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("file", e.target.files[0]);
                    }}
                    isInvalid={touched.file && errors.file}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.file}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mx-auto">
                <Form.Group
                  as={Col}
                  className="mb-3 mx-auto"
                  md="4"
                  controlId="formName"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.name}
                    placeholder="Enter Your Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3 mx-auto"
                  md="4"
                  controlId="formAge"
                >
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="age"
                    value={values.age}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.age && errors.age}
                    placeholder="Enter your Age"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.age}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mx-auto">
                <Form.Group
                  as={Col}
                  className="mb-3 mx-auto"
                  md="4"
                  controlId="formVotingNumber"
                >
                  <Form.Label>Voting Card Number</Form.Label>
                  <Form.Control
                    ref={VotePanRef}
                    name="voteNumber"
                    value={values.voteNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.voteNumber && errors.voteNumber}
                    placeholder="Enter Voter ID "
                    disabled={values.age >= 18 ? false : true}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.voteNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3 mx-auto"
                  md="4"
                  controlId="formPanNumber"
                >
                  <Form.Label>Pan Card Number</Form.Label>
                  <Form.Control
                    name="panNumber"
                    value={values.panNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.panNumber && errors.panNumber}
                    placeholder="Enter Pan Number"
                    disabled={values.age >= 18 ? false : true}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.panNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="justify-content-center mx-2">
                <Button
                  variant="success"
                  type="submit"
                  className=" col-md-3 m-2"
                >
                  Submit form
                </Button>
                <Button type="reset" className=" col-md-3 m-2">
                  Reset form
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default YupValidation;
