import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ToastComp from "../KeepNote/ToastComp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FieldArray, Formik } from "formik";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StudentDetail from "./StudentDetail";

const StudentTask = () => {
  //formdata in state
  const [formData, setFormData] = useState([]);

  //useHistory hook
  const navigate = useNavigate();

  //Yup validation
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
          .typeError("Percentage must be a numbe!!r")
          .min(0, "Percentage must be greater than or equal to 0!!")
          .max(100, "Percentage must be less than or equal to 100!!")
          .required("Percentage is required!!"),
        remark: Yup.string().required("Remark is required"),
      })
    ),
  });

  //grade object
  const grade = {
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
          }) => (
            <Form
              className="container border bg-light p-3"
              onSubmit={handleSubmit}
              isValidating="false"
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
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
                  <Form.Select
                    name="grade"
                    value={values.grade}
                    onChange={(event) => {
                      const { name, value } = event.target;
                      const numOfGrades = parseInt(value);
                      const newGrades =
                        numOfGrades === 1
                          ? []
                          : Array(numOfGrades - 1).fill({
                              percent: "",
                              remark: "",
                            });
                      console.log(newGrades);
                      // Update the prevGrades array with the new grades
                      setValues({ ...values, prevGrades: newGrades });
                      handleChange(event);
                    }}
                    onBlur={handleBlur}
                    isInvalid={touched.grade && errors.grade}
                  >
                    <option value="0">Select Grade</option>
                    {Object.entries(grade).map((val, ind) => (
                      <option key={ind} value={val[1]}>
                        {val[1]}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.grade}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* fieldArray code */}
              <FieldArray name="prevGrades">
                {(props) => (
                  <>
                    {values.grade &&
                      values.grade.length > 0 &&
                      values.prevGrades.map((_, index) => (
                        <Row key={index}>
                          <h3>Grade {index + 1}</h3>
                          <Form.Group
                            as={Col}
                            className="mb-3"
                            md="6"
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
                            md="6"
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
              </FieldArray>
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
