import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              ElectroplatingLB, founded in 1998, is a leading
              electroplating and metal finishing company based in Lebanon. With
              over two decades of experience, we have established ourselves as a
              reliable and innovative partner in providing high-quality metal
              coating and finishing solutions to a diverse range of industries.
            </p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +961 7679 4828</p>
            <p>Address: 54 Industrial Drive, Zouk, Lebanon.</p>

            <div className="social-icons">
              <a href="mailto:info@electroplating-lb.com" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ height: "40", color: "#EF8354", marginLeft: "12px" }}
                />
              </a>
              <a
                href="https://instagram.com/electro.plating.lb?igshid=ZDc4ODBmNjlmNQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ height: "40", color: "#EF8354", marginLeft: "12px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>&copy; {currentYear} ElectroPlating-LB. All rights reserved.</p>
          <div>
            Made with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              style={{ height: "15px", color: "#EF8354" }}
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
