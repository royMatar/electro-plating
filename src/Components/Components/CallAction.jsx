import React, { useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Metalprice from "./Metalprice";

// Debounce utility function
const debounce = (func, delay) => {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
};

const CallAction = () => {
  const debouncedScrollToTop = useCallback(
    debounce(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100),
    []
  );

  const handleClick = () => {
    debouncedScrollToTop();
  };

  return (
    <Container className="callaction">
      <Row className="callactioncol">
        <Col>
          Ready to experience the ultimate transformation? Unleash your products’ true potential today!
          <br />
          <Button
            variant="dark"
            className="callactionbtn"
            as={Link}
            onClick={handleClick}
            to="/contact"
            style={{ color: "#EF8354" }}
          >
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
