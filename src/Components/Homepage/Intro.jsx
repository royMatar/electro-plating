import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';


const Intro = () => {
  return (
    <>
      <Container
        style={{
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"yellow"
        }}
      >
        Intro: introduction about the company and electroplating in general plus
        one image
      </Container>
      <Container
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "100px",
          paddingTop: "100px",
          backgroundColor:"black"
        }}
      >
        <Row xs={1} sm={2} md={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="copper.jpg" height={200} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Subtitle>Card subtitle</Card.Subtitle>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Intro;
