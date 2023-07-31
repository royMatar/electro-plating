import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMugHot, faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg">
      <Container>
        <Row>
          <Col md-6>
            <h5>About Us</h5>
            <p>
              Your company description goes here. You can provide some
              information about your company, contact details, etc.
            </p>
          </Col>
          <Col md-6>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: Your company location/address</p>

            <div className="social-icons">
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ height: "35", color: "#EF8354" }}
                />
              </a> */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ height: "40", color: "#EF8354",marginLeft:"12px" }}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ height: "40", color: "#EF8354", marginLeft:"12px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>&copy; {currentYear} ElectroPlating-LB. All rights reserved.</p>
          <div>
            Made with{" "} <FontAwesomeIcon
              icon={faHeart}
              style={{ height: "15px", color: "#EF8354", }}
              beatFade
            />{" "}
            
            by Roy Matar
          </div>{" "}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
