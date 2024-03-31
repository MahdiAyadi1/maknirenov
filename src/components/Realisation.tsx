import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img1 from "./../assets/images/img1.png";
import img2 from "./../assets/images/img2.png";
import img3 from "./../assets/images/img3.png";
import "./realisations.css";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [buttonState, setButtonState] = useState(false);
  const navigate = useNavigate();
  const projectsData = [
    {
      image: img1,
      title: "Project 1",
      description: "Description of Project 1",
    },
    {
      image: img2,
      title: "Project 2",
      description: "Description of Project 2",
    },
    {
      image: img3,
      title: "Project 3",
      description: "Description of Project 3",
    },
  ];

  return (
    <div>
      <div className="realisations--text">Découvrir</div>
      <p className="realisations--title">Nos Projets</p>
      <Container>
        <Row className=" p-4">
          {projectsData.map((project, index) => (
            <Col md={4} xs={12} key={index} className="mb-3">
              <Card border="0" style={{ height: "300px" }}>
                <Card.Img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    borderRadius: "3px",
                  }}
                  src={project.image}
                  className="project-image"
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row></Row>
      </Container>
      <div className="flex--center" style={{ paddingBottom: "60px" }}>
        <button
          disabled={buttonState}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setButtonState(true);
            navigate("Realisation");
          }}
          className="btn-primary"
        >
          Voir plus
        </button>
      </div>
    </div>
  );
};

export default Projects;
