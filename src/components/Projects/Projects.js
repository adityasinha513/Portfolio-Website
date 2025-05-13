import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import defaultImage from "../../Assets/about.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImage}
              isBlog={false}
              title="Image Dehazing System"
              description="Developed an advanced image dehazing system using residual CNN and transmission network models. Implemented a real-time dehazing interface using Flask and OpenCV, achieving significant improvement in visibility for hazy images and videos."
              ghLink="https://github.com/adityasinha513/image-dehazing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImage}
              isBlog={false}
              title="Placement Portal"
              description="Led a team to develop a comprehensive placement portal using React, Node.js, and MongoDB. Features include student-company interaction, placement record management, and automated notification system. Implemented with TailwindCSS for a modern UI/UX."
              ghLink="https://github.com/adityasinha513/placement-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImage}
              isBlog={false}
              title="Potato Disease Classification"
              description="Built a machine learning model to classify potato leaf diseases with 90% accuracy. Created a full-stack application with Flask backend and React frontend, allowing farmers to easily identify plant diseases through image uploads. Also developed a mobile app using React Native."
              ghLink="https://github.com/adityasinha513/potato-disease-classifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defaultImage}
              isBlog={false}
              title="SafeTransact Banking System"
              description="Implemented a scalable banking system using C++ and Object-Oriented Programming principles. Features include secure transaction processing, account management, and detailed transaction history tracking. Focused on code modularity and system security."
              ghLink="https://github.com/adityasinha513/safe-transact"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
