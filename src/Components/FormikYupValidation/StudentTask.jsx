import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ToastComp from "../KeepNote/ToastComp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FieldArray, Formik, Field } from "formik";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StudentDetail from "./StudentDetail";

const StudentTask = () => {
  //useNavigate hook
  const navigate = useNavigate();

  //Yup validation schema
  const StudentFormValiationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
        message: "Invalid Email",
      })
      .required("Please, Enter Your Email!!"),
    roll: Yup.number()
      .test(
        "len",
        "Roll number must be exactly 12 digits long",
        (val) => val.toString().length === 12
      )
      .required("Please, Enter Roll Number!!"),
    name: Yup.string().required("Please, Enter your Name !!"),
    grade: Yup.string().required("Please, select grade"),
    prevGrades: Yup.array().of(
      Yup.object().shape({
        percent: Yup.number()
          .typeError("Percentage must be number type!!")
          .min(0, "Percentage must be greater than or equal to 0!!")
          .max(100, "Percentage must be less than or equal to 100!!")
          .required("Percentage is required!!"),
        remark: Yup.string().required("Remark is required!!"),
      })
    ),
  });

  //grade object
  const gradeOption = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th",
    9: "9th",
    10: "10th",
  };

  //submit toast
  const [showToast, setShowToast] = useState(false);
  function closeToastHanlder(status) {
    setShowToast(status);
  }

  //function : onGradeChange
  function onChangeGrade(e, field, values, setValues) {
    // update dynamic form
    const prevGradesCopy = [...values.prevGrades];
    const gradeNumber = parseInt(e.target.value) || 0;
    let previousGradeNumber = parseInt(field.value || "0");
    previousGradeNumber =
      previousGradeNumber > 0 && parseInt(field.value || "0") - 1;
    if (previousGradeNumber < gradeNumber) {
      for (let i = previousGradeNumber; i < gradeNumber - 1; i++) {
        console.log(previousGradeNumber, gradeNumber, prevGradesCopy);
        prevGradesCopy.push({ percent: "", remark: "" });
      }
    } else {
      for (let i = previousGradeNumber; i >= gradeNumber - 1; i--) {
        console.log(previousGradeNumber, gradeNumber, prevGradesCopy);
        prevGradesCopy.splice(i, 1);
      }
    }
    setValues({ ...values, prevGrades: prevGradesCopy });

    // call formik onChange method
    field.onChange(e);
  }

  return (
    <Box sx={{ flex: 1, p: 2 }}>
      {showToast && (
        <ToastComp
          severity="info"
          text="Thank You !!"
          closeToastHanlder={closeToastHanlder}
          vertical="bottom"
          horizontal="center"
        />
      )}
      <Typography variant="h5" sx={{ flex: 0, textAlign: "center", p: 2 }}>
        Student Registration
      </Typography>

      <Box sx={{ flex: 1 }}>
        <Formik
          initialValues={{
            name: "",
            roll: "",
            email: "",
            grade: "",
            prevGrades: [],
          }}
          validationSchema={StudentFormValiationSchema}
          onSubmit={(values) => {
            console.log(values);
            setShowToast(true);
            navigate("/Projects/StudentDetail", {
              state: { studentData: values },
            });
          }}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            values,
            touched,
            setValues,
            setFieldValue,
          }) => (
            <Form
              className="container border bg-light p-3"
              onSubmit={handleSubmit}
              isValidating
              noValidate
            >
              <Row>
                {/* Name  */}
                <Form.Group
                  as={Col}
                  md="6"
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> Name </Form.Label>
                  <Form.Control
                    name="name"
                    value={values.name}
                    placeholder="Enter Your Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* email */}
                <Form.Group
                  as={Col}
                  md="6"
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label> Email address</Form.Label>
                  <Form.Control
                    name="email"
                    value={values.email}
                    placeholder="abc@123gmai.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-2">
                {/* Roll */}
                <Form.Group
                  as={Col}
                  md="6"
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label> Roll </Form.Label>
                  <Form.Control
                    name="roll"
                    value={values.roll}
                    placeholder="Enter Roll Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.roll && errors.roll}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.roll}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Grade Selection */}
                <Form.Group
                  as={Col}
                  md="6"
                  className="mb-3"
                  controlId="exampleForm.ControlSelect1"
                >
                  <Form.Label>Select Current Grade </Form.Label>
                  <Field name="grade">
                    {({ field }) => (
                      <Form.Select
                        {...field}
                        value={values.grade}
                        onChange={(e) =>
                          onChangeGrade(e, field, values, setValues)
                        }
                        onBlur={handleBlur}
                        isInvalid={touched.grade && errors.grade}
                      >
                        <option value="">Select Grade</option>
                        {Object.entries(gradeOption).map((val, ind) => (
                          <option key={ind} value={val[0]}>
                            {val[1]}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  </Field>
                  <Form.Control.Feedback type="invalid">
                    {errors.grade}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              {values.grade > 1 && (
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ textTransform: "upppercase", mb: 2, fontWeight: 500 }}
                >
                  Enter Previous Grades Details
                </Typography>
              )}

              {/*--------------fieldArray code------------------- */}
              <FieldArray
                name="prevGrades"
                render={({ props }) => (
                  <>
                    {values.prevGrades.length > 0 &&
                      values.prevGrades.map((_, index) => (
                        <Row
                          key={index}
                          className="bg-white mx-auto border p-2"
                        >
                          <Box
                            as={Col}
                            className="mb-3 text-center"
                            md="2"
                            sx={{ fontSize: 1 }}
                          >
                            <h3>Grade {index + 1}</h3>
                          </Box>
                          <Form.Group
                            as={Col}
                            className="mb-3"
                            md="5"
                            controlId={`percent-${index}`}
                          >
                            {console.log(index)}
                            <Form.Label>Enter Percent</Form.Label>
                            <Form.Control
                              name={`prevGrades[${index}].percent`}
                              value={values.prevGrades[index].percent}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={
                                touched.prevGrades &&
                                touched.prevGrades[index]?.percent &&
                                errors.prevGrades &&
                                errors.prevGrades[index]?.percent
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.prevGrades &&
                                errors.prevGrades[index]?.percent}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            className="mb-3"
                            md="5"
                            controlId={`remark-${index}`}
                          >
                            <Form.Label>Enter Remark</Form.Label>
                            <Form.Control
                              name={`prevGrades[${index}].remark`}
                              value={values.prevGrades[index].remark}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={
                                touched.prevGrades &&
                                touched.prevGrades[index]?.remark &&
                                errors.prevGrades &&
                                errors.prevGrades[index]?.remark
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.prevGrades &&
                                errors.prevGrades[index]?.remark}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                      ))}
                  </>
                )}
              />

              {/* //updated code - for validation on onsubmit for first object  only */}

              <Row>
                <Button type="submit" className="col-md-3 mx-auto my-4">
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

export default StudentTask;
