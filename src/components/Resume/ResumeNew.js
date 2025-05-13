import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { FaEye, FaPaperPlane } from "react-icons/fa";

function ResumeNew() {
  const resumeLink = "https://drive.google.com/file/d/1BbuAuWZ310TR9LnrBFP2SH8k5dg4B6WW/view?usp=sharing";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    // Format the email body with proper line breaks and encoding
    const emailBody = `
Dear Aditya,

You have received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
Portfolio Contact Form
`.trim();

    // Create the mailto link with encoded subject and body
    const mailtoLink = `mailto:adityasinha513@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setValidated(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", gap: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <FaEye />&nbsp;View Resume
          </Button>
          <Button
            variant="primary"
            href={resumeLink.replace('/view?usp=sharing', '/export?format=pdf')}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />&nbsp;Download Resume
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", padding: "50px 0" }}>
          <Col md={8} id="contact">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">Me</strong>
            </h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter your message"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                <FaPaperPlane />&nbsp;Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
