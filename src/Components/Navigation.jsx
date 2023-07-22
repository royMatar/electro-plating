import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const expand = "lg";
  return (
    <Navbar
      expand={expand}
      className="bg-body-tertiary mb-3 fixed-top"
      style={{
        fontFamily: "Candara",
        height: "60px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      }}
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ marginRight: "20px" }}>
          <img src="logo-no-background.png" width={200} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="offcanvas-custom"
          bg="dark"
          data-bs-theme="dark"
          style={{
            color: "white",
            fontFamily: "Candara",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src="logo-no-background.png" width={200} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-4 nav-links">
              <Nav.Link as={Link} to="/" id="link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" id="link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" id="link">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/industries" id="link">
                Industries
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" id="link">
                Contact us
              </Nav.Link>
              <Nav.Link as={Link} to="/faq" id="link">
                FAQs
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
