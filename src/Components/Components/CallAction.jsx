import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Metalprice from "./Metalprice";

const CallAction = () => {
  return (
    <Container className="callaction">
    <Row className="callactioncol">
      <Col>
        Ready to experience the ultimate transformation? Unleash your products’ true potential today!
        <br />
        <Button variant="dark" className="callactionbtn" as={Link} to="/contact" style={{ color: "#EF8354" }}>
          Contact us!
        </Button>
      </Col>
      <Col className="metal-price-container">
        <Metalprice />
      </Col>
    </Row>
  </Container>
  );
};

export default CallAction;
