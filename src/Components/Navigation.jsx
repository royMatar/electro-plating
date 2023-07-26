import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const expand = "lg";
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleLinkClick = () => {
    setShowOffcanvas(false); // Close the offcanvas when a link is clicked
  };

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
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={handleOffcanvasToggle}
          style={{ borderColor: "#EF8354",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)" }}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
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
              <img src="logo-no-background.png" width={200} alt="Logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-4 nav-links"
              onClick={handleLinkClick}
            >
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
