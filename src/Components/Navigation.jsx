import React, { useState } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {  Link } from 'react-router-dom';

const Navigation = () => {
  const [expand, setExpand] = useState("lg");

  return (
    <Container className="mt-3" >
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top" style={{ backgroundColor: "transparent" }} >
        <Container >
          <Navbar.Brand as={Link} to="/">ElectroPlating</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                ElectroPlating
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
                <NavDropdown
                  title="Services"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to="/finishing">
                    Metal Finishing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/types">
                    Plating Types
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/decorative">
                    Decorative Coatings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/restoration">
                    Metal Restoration
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/quality-control">
                    Quality Control and Testing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/consultation">
                    Consultation and Technical Expertise
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Industries"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to="/">
                    Automotive
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/furniture">Furniture</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/jewelry">
                    Jewelry and Fashion
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/medical">
                    Medical and Healthcare
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/plumbing">
                    Plumbing and Sanitary
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/electronics">
                    Electronics and Electrical
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/military-apps">
                    Military Applications
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                <Nav.Link as={Link} to="/faq">FAQs</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
