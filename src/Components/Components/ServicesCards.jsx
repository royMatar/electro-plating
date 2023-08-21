import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const services = [
  {
    id: 1,
    title: "ElectroPlating",
    text: "Our gold, silver, chrome and other plating services add a touch of elegance and durability to a wide variety of products. Whether it's jewelry, luxury accessories, or industrial components, our team meticulously applies these precious metal coatings to achieve a brilliant finish that stands the test of time.",
    image: "./assets/engine.jpeg",
  },
  
  {
    id: 2,
    title: "Anodizing",
    text: "For aluminum and other non-ferrous metals, our anodizing process offers excellent protection and color options. Anodized components are widely used in industries such as aerospace, electronics, and architecture, where durability and aesthetic appeal are crucial.",
    image: "./assets/furniture.jpeg",
  },
  {
    id: 3,
    title: "Custom Finishes",
    text: "We understand that some projects require unique and distinctive finishes. Our team is equipped to work closely with you to develop custom solutions that match your specific requirements and design preferences. Let us turn your vision into reality!",
    image: "./assets/pipes.jpeg",
  },
  {
    id: 4,
    title: "Quality Assurance",
    text: "Quality is our top priority at ElectroplatingLB. With our strict quality control measures, state-of-the-art equipment, and skilled technicians, we ensure that each item leaving our facility meets the highest standards of excellence.",
    image: "./assets/motorcycle.jpeg",
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

  const ServicesCards = () => {
    return (
      <>
        <Container className="title-container">
          <h1 className="title-header">Services</h1>
        </Container>
        {/* <Container>
          <h3 className="sub-title">
            At ElectroplatingLB, we offer a comprehensive range of electroplating
            and metal finishing services, tailored to meet the diverse needs of
            our clients. Our commitment to excellence, advanced technology, and
            skilled craftsmanship ensure that we deliver high-quality results for
            every project. Explore our services below:
          </h3>
        </Container> */}
  
  <Container className="mb-5">
  {services.map((service, index) => (
    <Row
      key={service.id}
      className={`mb-5 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
    >
      <Col xs={12} md={6}>
        <Card className="h-100" style={{ borderWidth: "0" }}>
          <Card.Img
            variant="top"
            src={service.image}
            height='400'
            style={{
              objectFit: "cover",
              borderRadius: "20px 20px 20px 20px",
            }}
            className="imageeffect"
            loading="lazy"
          />
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card className="h-100" style={{ borderWidth: "0" }}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
            <Card.Title style={cardTitleStyle}>{service.title}</Card.Title>
            <Card.Text style={cardTextStyle}>{service.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ))}
</Container>
      </>
    );
  };
  
  export default ServicesCards;



