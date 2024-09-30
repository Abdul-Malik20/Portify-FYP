import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/howitworks.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "Search for Charging Stations",
      description: "Enter your location to find nearby charging stations.",
      graphic: "./images/2.jpg",
    },
    {
      title: "Check Availability",
      description: "View real-time availability of charging ports.",
      graphic: "./images/3.jpg",
    },
    {
      title: "Get Directions",
      description: "Get turn-by-turn directions to the charging station.",
      graphic: "./images/4.jpg",
    },
    {
      title: "Start Charging",
      description: "Plug in your vehicle and start charging.",
      graphic: "./images/5.jpg",
    },
  ];

  return (
    <Container className="timeline-container ">
      <h2 className="text-center mb-3">How It Works</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <Row className="timeline-row" key={index}>
            <Col
              md={6}
              className={`timeline-content ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h6>{step.title}</h6>
              <p>{step.description}</p>
            </Col>
            <Col
              md={6}
              className={`timeline-image ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <img
                src={step.graphic}
                alt={step.title}
                className="img-fluid small-img"
              />
            </Col>
            <div className="timeline-line"></div>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
