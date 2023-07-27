import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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

const KeyServices = () => {
  const industries = [
    {
      id: 1,
      title: "Automotive",
      text: "Enhance your vehicle with our premium electroplating treatments.",
      image: "image9.jpg",
    },
    {
      id: 2,
      title: "Jewelry",
      text: " Elevate your worn jewelry items into exquisite treasures through our expert electroplating services.",
      image: "image17.jpg",
    },
    {
      id: 3,
      title: "Furniture",
      text: "Experience unparalleled artistry with our electroplating solutions for furniture.",
      image: "goldfurniture.jpg",
    },
    {
      id: 4,
      title: "Plumbing",
      text: "Achieve lasting durability and precision plating for sanitary equipment.",
      image: "image15.jpg",
    },
    {
      id: 5,
      title: "Restoration",
      text: "Impeccable results guaranteed with our meticulous electroplating processes for restoration projects.",
      image: "image14.jpg",
    },
    {
      id: 6,
      title: "Military",
      text: "Revitalize your firearms with our electroplating service, transforming them into gleaming pieces.",
      image: "gunimage.jpg",
    },
  ];
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <h1 className="title-header">Industries</h1>
      </Container>

      <Container
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "100px",
          marginTop: "100px",
        }}
      >
        <Row xs={1} sm={2} md={3} className="g-4">
          {industries.map((industry) => (
            <Col key={industry.id}>
              <Card className="h-100 card-hover-animation">
                <Card.Img
                  variant="top"
                  src={industry.image}
                  height={300}
                  style={{ objectFit: "cover" }}
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

export default KeyServices;
