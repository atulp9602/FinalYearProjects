import { Box, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Avatar } from "@mui/material";
import AvtarComp from "../AvtarComp";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const YupValidation = () => {
  const [file, setFile] = useState([]);
  const VotePanRef = useRef(null);
  const fileRef = useRef(null);
  const navigate = useNavigate();

  //Validation schema
  const exampleValidation = Yup.object().shape({
    name: Yup.string().required("Please, Enter Your Name !!"),
    age: Yup.number()
      .required("Please, Enter your age !!")
      .typeError("It must be Number !!"),
    file: Yup.mixed()
      .nullable()
      .required("You need to provide a file")
      .test(
        "fileSize",
        "This file is too large",
        (file) => !file || (file && file.size <= 1024 * 1024)
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
    voteNumber: Yup.number().when("age", {
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
          onSubmit={(values) =>
            navigate("/Projects/PreviewForm", {
              state: { profileData: values, imgData: values.file },
            })
          }
          validationSchema={exampleValidation}
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
          }) => (
            <Form
              className="p-4 border border-dark-subtle"
              onSubmit={handleSubmit}
            >
              {/* //image  */}
              <Row className="mx-auto">
                <Form.Group
                  as={Col}
                  controlId="formFileSm"
                  className="mb-3 mx-auto col-md-3"
                >
                  <Box>{<AvtarComp file={values.file} />}</Box>

                  <Form.Control
                    ref={fileRef}
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
                <FormGroup
                  as={Col}
                  className="mb-2 mx-auto"
                  md="4"
                  controlId="formName"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.name}
                    placeholder="Enter Your Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </FormGroup>

                <FormGroup
                  as={Col}
                  className="mb-2 mx-auto"
                  md="4"
                  controlId="formAge"
                >
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.age && errors.age}
                    placeholder="Enter your Age"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.age}
                  </Form.Control.Feedback>
                </FormGroup>
              </Row>

              <Row className="mx-auto">
                <FormGroup
                  as={Col}
                  className="mb-2 mx-auto"
                  md="4"
                  controlId="formVotingNumber"
                >
                  <Form.Label>Voting Card Number</Form.Label>
                  <Form.Control
                    ref={VotePanRef}
                    name="voteNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.voteNumber && errors.voteNumber}
                    placeholder="Enter Voter ID "
                    disabled={values.age >= 18 ? false : true}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.voteNumber}
                  </Form.Control.Feedback>
                </FormGroup>
                <FormGroup
                  as={Col}
                  className="mb-2 mx-auto"
                  md="4"
                  controlId="formPanNumber"
                >
                  <Form.Label>Pan Card Number</Form.Label>
                  <Form.Control
                    name="panNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.panNumber && errors.panNumber}
                    placeholder="Enter Pan Number"
                    disabled={values.age >= 18 ? false : true}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.panNumber}
                  </Form.Control.Feedback>
                </FormGroup>
              </Row>
              <Row className="mx-auto">
                <Button type="submit" className="col-6 col-md-3 mx-auto my-4">
                  Submit form
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
