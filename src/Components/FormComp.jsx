import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import ToastComp from "./KeepNote/ToastComp";

const FormComp = (props) => {
  const contactValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
        message: "Invalid Email",
      })
      .required("Please, Enter Your Email!!"),
    msg: Yup.string().required("Please, Enter your message!!"),
  });
  const [showToast, setShowToast] = useState(false);
  function closeToastHanlder(status) {
    setShowToast(status);
  }

  // const submitToast = ()

  return (
    <>
      {showToast && (
        <ToastComp
          severity="info"
          text="Thank You !!"
          closeToastHanlder={closeToastHanlder}
          vertical="bottom"
          horizontal="center"
        />
      )}

      <Formik
        initialValues={{
          email: "",
          msg: "",
        }}
        validationSchema={contactValidationSchema}
        onSubmit={(values) => {
          setShowToast(true);
          values.email = "";
          values.msg = "";
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          values,
          touched,
        }) => (
          <Form
            className="col-12 col-md-6 mx-auto"
            onSubmit={handleSubmit}
            isValidating="false"
            noValidate
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Leave Your message here</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="msg"
                value={values.msg}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.msg && errors.msg}
              />
              <Form.Control.Feedback type="invalid">
                {errors.msg}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComp;
