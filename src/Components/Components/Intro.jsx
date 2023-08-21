import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <Container fluid className="introsection">
      <Container className="textposition" >
        <Row>
          <Col className="firstcol" sm={6}>A Shining Legacy</Col>
          <Col className="secondcol" sm={6}>
            We’re the go-to electroplating company, thriving on expert
            techniques and top-notch quality to transform products and breathe
            new life into old items. Let us show you the true meaning of
            brilliance!
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Intro;
