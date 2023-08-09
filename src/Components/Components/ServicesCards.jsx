import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const services = [
  {
    id: 1,
    title: "Gold, Silver and Nickel Plating",
    text: "Our gold, silver, and nickel plating services add a touch of elegance and durability to a wide variety of products. Whether it's jewelry, luxury accessories, or industrial components, our team meticulously applies these precious metal coatings to achieve a brilliant finish that stands the test of time.",
    image: "./assets/engine.jpeg",
  },
  {
    id: 2,
    title: "Chrome and Copper Plating",
    text: "Enhance the appearance and corrosion resistance of your products with our chrome and copper plating services. We apply these finishes to various items, including automotive parts, plumbing fixtures, and decorative pieces, to create a stunning, lustrous surface.",
    image: "./assets/accessories.jpeg",
  },
  {
    id: 3,
    title: "Anodizing",
    text: "For aluminum and other non-ferrous metals, our anodizing process offers excellent protection and color options. Anodized components are widely used in industries such as aerospace, electronics, and architecture, where durability and aesthetic appeal are crucial.",
    image: "./assets/furniture.jpeg",
  },
  {
    id: 4,
    title: "Custom Finishes",
    text: "We understand that some projects require unique and distinctive finishes. Our team is equipped to work closely with you to develop custom solutions that match your specific requirements and design preferences. Let us turn your vision into reality!",
    image: "./assets/pipes.jpeg",
  },
  {
    id: 5,
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
      <Container
        className="title-container" // Add a CSS class for styling
      >
        <h1 className="title-header">Services</h1>
      </Container>
      <Container>
        <h3 className="sub-title">
          At ElectroplatingLB, we offer a comprehensive range of electroplating
          and metal finishing services, tailored to meet the diverse needs of
          our clients. Our commitment to excellence, advanced technology, and
          skilled craftsmanship ensure that we deliver high-quality results for
          every project. Explore our services below:
        </h3>
      </Container>

      <Container className="mb-5">
        <Row xs={1} sm={2} md={3} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card className="h-100" style={{ borderWidth: "0" }}>
                {" "}
                {/* Use CSS classes for styling */}
                <Card.Img
                  variant="top"
                  src={service.image}
                  height={300}
                  style={{ objectFit: "cover", borderRadius: "40px" }} // Remove borderRadius from here
                  className="imageeffect"
                  loading="lazy" // Lazy loading for images
                />
                <Card.Body>
                  <Card.Title style={cardTitleStyle}>
                    {service.title}
                  </Card.Title>
                  <Card.Text style={cardTextStyle}>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServicesCards;
