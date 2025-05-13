import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Sinha</span>, a passionate
            developer and problem solver from <span className="purple">India</span>.
            <br />
            <br />
            I am currently pursuing my B.Tech in Computer Science at{" "}
            <span className="purple">Jaypee University of Information Technology, Solan</span>,
            graduating in May 2025.
          </p>

          <div className="experience-section">
            <h3 className="purple">EXPERIENCE</h3>
            
            <div className="experience-item">
              <h4>BLACKCRAB IT PVT LTD | Frontend Developer Intern</h4>
              <p className="experience-duration">June 2024 - July 2024 | Remote</p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Built a responsive landing page using React.js and JavaScript for improved UX.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Collaborated with cross-functional teams to meet deadlines and streamline workflows.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Learned Node.js and implemented API integration during the internship.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h4>TRANSLAB.IO | Technical Intern</h4>
              <p className="experience-duration">June 2023 - July 2023 | Jammu, Jammu and Kashmir</p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Gained hands-on experience with Linux systems.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Deployed VMs using Azure VNet architecture and explored cloud computing.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Worked with React.js framework for frontend development.
                </li>
              </ul>
            </div>
          </div>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building innovative solutions that make a real impact!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
