import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  const expand = "lg";

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLinkClick = (event) => {
    const links = document.querySelectorAll("#link"); // Get all the links with the "link" id
    links.forEach((link) => link.classList.remove("active")); // Remove "active" class from all links
    event.target.classList.add("active"); // Add "active" class to the clicked link
    setShowOffcanvas(false);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
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
          <img src="./assets/logo-no-background.png" width={200} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          style={{
            borderColor: "#EF8354",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          }}
          onClick={() => setShowOffcanvas((prev) => !prev)}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
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
              <img
                src="./assets/logo-no-background.png"
                width={200}
                alt="Logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-4 nav-links">
              <Nav.Link as={Link} to="/" id="link" onClick={handleLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                id="link"
                onClick={handleLinkClick}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                id="link"
                onClick={handleLinkClick}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/industries"
                id="link"
                onClick={handleLinkClick}
              >
                Industries
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                id="link"
                onClick={handleLinkClick}
              >
                Contact us
              </Nav.Link>
              <div className="social-icons">
              <a href="https://www.facebook.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-icon"
                />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="social-icon"
                />
              </a>
              <a href="mailto:iam@roymatar.com" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="social-icon"
                />
              </a>
            </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
