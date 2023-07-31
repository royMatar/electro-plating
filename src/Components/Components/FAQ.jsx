import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FAQ = () => {
  return (
    <Container fluid style={{marginBottom:"30px"}}>
      <Container
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "200px",
          paddingTop: "10px",
          marginBottom:"20px",
        }}
      >
        <h1 className="title-header">FAQs</h1>
      </Container>
      <Container
        style={{
          display: "grid",
          paddingBottom: "30px",
        }}
      >
        <Row xs={1} sm={1} md={2}>
          <Col>
            <h3 className="faq-title">How do I choose the right service?</h3>
            <p className="faq-text">
              Our expert team will guide you in selecting the perfect service
              based on your specific needs and requirements.
            </p>
          </Col>
          <Col>
            <h3 className="faq-title">What industries do you cater to?</h3>
            <p className="faq-text">
              We serve a wide range of industries, including automotive,
              aviation, musical instruments, and many more!
            </p>
          </Col>
          <Col>
            <h3 className="faq-title">How long does the process take?</h3>
            <p className="faq-text">
              The turnaround time varies depending on the service. Contact us
              for an accurate estimate.
            </p>
          </Col>
          <Col>
            <h3 className="faq-title">What sets you apart?</h3>
            <p className="faq-text">
              Our commitment to impeccable quality and unwavering dedication to
              customer satisfaction is what sets us apart.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FAQ;
