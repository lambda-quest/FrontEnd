import React from "react";
//bootstrap
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import edgar from "../../assets/edgar.JPG";
import louis from "../../assets/louis.JPG";
import jazz from "../../assets/jazz.JPG";
import ronny from "../../assets/ronny.JPG";
import pete from "../../assets/pete.JPG";
import reed from "../../assets/reed.JPG";

import Button from "react-bootstrap/Button";
//style
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>The Lambda Quest Squad</h1>

      <Container>
        <div className="row-container">
          <Row>
            <Col>
              <Card style={{ width: "300px", height: "490px" }}>
                <Card.Img variant="top" src={edgar} />
                <Card.Body>
                  <Card.Title>Edgar Flores</Card.Title>
                  <Card.Text>Front End Developer</Card.Text>
                </Card.Body>
                <div className="btn-container">
                  <a
                    href="https://github.com/efloreslb"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/efloresef/"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "300px", height: "490px" }}>
                <Card.Img variant="top" src={jazz} />
                <Card.Body>
                  <Card.Title>Jasmine Logan</Card.Title>
                  <Card.Text>Front End Developer</Card.Text>
                </Card.Body>
                <div className="btn-container">
                  <a
                    href="https://github.com/claridiva2000"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jasmineclogan/"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "300px", height: "490px" }}>
                <Card.Img variant="top" src={louis} />
                <Card.Body>
                  <Card.Title>Louis Magdeleno</Card.Title>
                  <Card.Text>Backend Developer</Card.Text>
                </Card.Body>
                <div className="btn-container">
                  <a
                    href="https://github.com/louismagdaleno"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/louis-magdaleno/"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="row-container">
          {" "}
          <Row>
            <Col>
              <Card style={{ width: "300px", height: "490px" }}>
                <Card.Img variant="top" src={ronny} />
                <Card.Body>
                  <Card.Title>Ronny Alvarado</Card.Title>
                  <Card.Text>Backend Developer</Card.Text>
                </Card.Body>
                <div className="btn-container">
                  <a
                    href="https://github.com/RonnySAlvarado"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ronnysalvarado/"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "300px", height: "490px" }}>
                <Card.Img variant="top" src={reed} />
                <Card.Body>
                  <Card.Title>Reed Turgeon</Card.Title>
                  <Card.Text>Backend Developer</Card.Text>
                </Card.Body>
                <div className="btn-container">
                  <a
                    href="https://github.com/MrT3313"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/reedturgeon/"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "300px", height: "490px" }}>
                <Card.Img variant="top" src={pete} />
                <Card.Body>
                  <Card.Title>Pete Le' Duck</Card.Title>
                  <Card.Text>Q/A Tester/ Character Model</Card.Text>
                </Card.Body>
                <div className="btn-container">
                  <a
                    href="https://github.com/claridiva2000"
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  {/* <a
                    href=""
                    className="btn-color"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a> */}
                </div>
              </Card>
            </Col>
          </Row>{" "}
        </div>
      </Container>
    </div>
  );
};

export default About;
