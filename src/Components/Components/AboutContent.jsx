import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const AboutContent = () => {
  return (
    <Container className="about-container" style={{ marginTop: "150px" }}>
      <Row className="mb-4">
        <Col md={6} >
          <h2 className="title-header">About ElectroPlating-LB</h2>
          <h3 className="secondcol">Overview:</h3>
          <p>
            ElectroplatingLB, founded in April 1998, is a leading electroplating
            and metal finishing company based in Lebanon. With over two decades
            of experience, we have established ourselves as a reliable and
            innovative partner in providing high-quality metal coating and
            finishing solutions to a diverse range of industries.
          </p>
          <h3 className="secondcol">Our Mission:</h3>
          <p>
            At ElectroplatingLB, our mission is to deliver exceptional
            electroplating and metal finishing services that enhance the
            performance, durability, and aesthetics of our customers' products.
            We are committed to using advanced technologies, eco-friendly
            processes, and skilled craftsmanship to exceed our clients'
            expectations while contributing to a sustainable future.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src="./assets/car.jpeg"
            alt="Image Description"
            className="img-fluid rounded-pill"
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "450px",
            }}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} className="text-center">
          <Image
            src="./assets/lamp.jpeg"
            alt="Image Description"
            className="img-fluid rounded-pill"
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "450px",
            }}
          />
        </Col>
        <Col style={{marginTop:'30px'}} >
          <h3 className="secondcol">Why Choose ElectroplatingLB?</h3>
          <ul>
            <li>
              Unmatched Expertise: Our team of experienced professionals brings
              extensive knowledge and expertise in the field of electroplating,
              ensuring flawless results for every project.
            </li>
            <li>
              Cutting-edge Technology: We invest in the latest electroplating
              equipment and technology, enabling us to offer a wide range of
              finishes and meet the most demanding requirements
            </li>
            <li>
              Quality Assurance: Quality is at the heart of everything we do.
              Our stringent quality control measures guarantee that each item
              leaving our facility meets the highest industry standards.
            </li>
            <li>
              Custom Solutions: We understand that every project is unique. Our
              team works closely with clients to develop tailor-made solutions
              that align with their specific needs and vision.
            </li>
            <li>
              Environmental Responsibility: As a responsible corporate citizen,
              we prioritize environmentally friendly practices. Our processes
              comply with all relevant regulations, and we continuously seek
              ways to minimize our ecological footprint.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
