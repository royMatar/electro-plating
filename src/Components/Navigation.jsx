import React, { useState } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const Navigation = () => {
  const [expand, setExpand] = useState("lg");

  return (
    <Container className="mt-3" >
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top" style={{ backgroundColor: "transparent" }} >
        <Container >
          <Navbar.Brand href="#">ElectroPlating</Navbar.Brand>
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <NavDropdown
                  title="Services"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">
                    Metal Finishing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Plating Types
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Decorative Coatings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Metal Restoration
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Quality Control and Testing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Consultation and Technical Expertise
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Industries"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">
                    Automotive
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Furniture</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Jewelry and Fashion
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Medical and Healthcare
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Plumbing and Sanitary
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Electronics and Electrical
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Military Applications
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1">Contact us</Nav.Link>
                <Nav.Link href="#action1">FAQs</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
