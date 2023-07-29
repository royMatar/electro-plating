import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FAQ = () => {
  return (
    <Container fluid className="orange-bg">
      <Container
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "200px",
          marginBottom: "30px",
          paddingTop: "30px",
        }}
      >
        <h1 className="title-header">FAQs</h1>
      </Container>
      <Container
        style={{
          display: "grid",
          paddingBottom: "30px",
          gap: "120px",
          
        }}
      >
        <Row xs={1} sm={1} md={2}>
          <Col>
            <h3>How do I choose the right service?</h3>
            <p>
              Our expert team will guide you in selecting the perfect service
              based on your specific needs and requirements.
            </p>
          </Col>
          <Col>
            <h3>What industries do you cater to?</h3>
            <p>
              We serve a wide range of industries, including automotive,
              aviation, musical instruments, and many more!
            </p>
          </Col>
          <Col>
            <h3>How long does the process take?</h3>
            <p>
              The turnaround time varies depending on the service. Contact us
              for an accurate estimate.
            </p>
          </Col>
          <Col>
            <h3>What sets you apart?</h3>
            <p>
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
