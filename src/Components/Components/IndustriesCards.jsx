import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const industries = [
  {
    id: 1,
    title: "Automotive",
    text: "Enhance your vehicle with our premium electroplating treatments.",
    image: "./assets/engine.jpeg",
  },
  {
    id: 2,
    title: "Jewelry",
    text: " Elevate your worn jewelry items into exquisite treasures through our expert electroplating services.",
    image: "./assets/accessories.jpeg",
  },
  {
    id: 3,
    title: "Furniture",
    text: "Experience unparalleled artistry with our electroplating solutions for furniture.",
    image: "./assets/furniture.jpeg",
  },
  {
    id: 4,
    title: "Plumbing",
    text: "Achieve lasting durability and precision plating for sanitary equipment.",
    image: "./assets/pipes.jpeg",
  },
  {
    id: 5,
    title: "Restoration",
    text: "Impeccable results guaranteed with our meticulous electroplating processes for restoration projects.",
    image: "./assets/motorcycle.jpeg",
  },
  {
    id: 6,
    title: "Military",
    text: "Revitalize your firearms with our electroplating service, transforming them into gleaming pieces.",
    image: "./assets/goldgun.jpeg",
  },
];

const cardTitleStyle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "10px",
  color: "#2D3142",
  fontFamily: "'Bowlby One', sans-serif",
};

const cardTextStyle = {
  fontSize: "16px",
  color: "#2D3142",
  fontFamily: "'Bowlby One', sans-serif",
};

const KeyIndustries = () => {
  return (
    <>
      <Container
        className="title-container" // Add a CSS class for styling
      >
        <h1 className="title-header">Industries</h1>
        
      </Container>
      <Container>
      <h3>
          At ElectroplatingLB, we take pride in offering our electroplating and
          metal finishing expertise to a diverse range of industries. With our
          advanced technology and skilled team, we cater to the specific needs
          of each sector, delivering outstanding results that enhance the
          performance and aesthetics of their products. Explore the industries
          we serve below:
        </h3>
      </Container>
   
      <Container className="mb-5">
        <Row xs={1} sm={2} md={3} className="g-4">
          {industries.map((industry) => (
            <Col key={industry.id}>
              <Card className="h-100" style={{ borderWidth: "0" }}>
                {" "}
                {/* Use CSS classes for styling */}
                <Card.Img
                  variant="top"
                  src={industry.image}
                  height={300}
                  style={{ objectFit: "cover", borderRadius: "40px" }} // Remove borderRadius from here
                  className="imageeffect"
                  loading="lazy" // Lazy loading for images
                />
                <Card.Body>
                  <Card.Title style={cardTitleStyle}>
                    {industry.title}
                  </Card.Title>
                  <Card.Text style={cardTextStyle}>{industry.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default memo(KeyIndustries);
