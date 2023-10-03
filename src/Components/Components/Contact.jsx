import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    company: "",
    reason: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Your email is required"),
    reason: Yup.string().required("Your message is required"),
    
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://formspree.io/f/xbjvoprp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setShowAlert(true);
        setSubmitting(false);
        resetForm();
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <Container className="my-5">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <h1 className="title-header mb-5">Contact us</h1>
      </Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name/Company: <span style={{ color: "#EF8354" }}>*</span>
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    style={{ borderColor: "#2D3142" }}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{
                      color: "#EF8354",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:<span style={{ color: "#EF8354" }}>*</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    style={{ borderColor: "#2D3142" }}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{
                      color: "#EF8354",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Location:
                  </label>
                  <Field
                    type="text"
                    id="country"
                    name="country"
                    className="form-control"
                    style={{ borderColor: "#2D3142" }}
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    style={{
                      color: "#EF8354",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="reason" className="form-label">
                    Message: <span style={{ color: "#EF8354" }}>*</span>
                  </label>
                  <Field
                    as="textarea"
                    id="reason"
                    name="reason"
                    rows="6"
                    className="form-control"
                    style={{ borderColor: "#2D3142" }}
                  />
                  <ErrorMessage
                    name="reason"
                    component="div"
                    style={{
                      color: "#EF8354",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  />
                </div>

                

                <Button type="submit" variant="dark" disabled={isSubmitting} style={{ color: "#EF8354" }} >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>

          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
              className="mt-3"
              style={{ zIndex: 1000 }}
            >
              Thank you for your submission! We will reply to you shortly.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
