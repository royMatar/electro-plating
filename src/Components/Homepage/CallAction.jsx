import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CallAction = () => {
  return (
    <Container className="callaction">
      <Row className="firstcol">
        <Col  md={6}>
          Ready to experience the ultimate transformation? Unleash your
          products’ true potential today!
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <Button variant="dark" className="callactionbtn" as={Link} to="/contact" >Contact us!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CallAction;
