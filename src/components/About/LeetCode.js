import React from "react";
import { Row, Col } from "react-bootstrap";

function LeetCode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <Col md={12} className="leetcode-stats-card">
        <iframe 
          title="LeetCode Stats"
          src="https://leetcode-stats-six.vercel.app/?username=adityasinha513&theme=dark"
          width="100%"
          height="250px"
          frameBorder="0"
          scrolling="no"
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(200, 137, 230, 0.637)",
            borderRadius: "5px",
            boxShadow: "4px 5px 4px 3px rgba(89, 4, 168, 0.137)",
            marginBottom: "20px"
          }}
        />
        <iframe 
          title="LeetCode Heatmap"
          src="https://leetcode-calendar-graph.vercel.app/?username=adityasinha513&theme=dark"
          width="100%"
          height="200px"
          frameBorder="0"
          scrolling="no"
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(200, 137, 230, 0.637)",
            borderRadius: "5px",
            boxShadow: "4px 5px 4px 3px rgba(89, 4, 168, 0.137)",
          }}
        />
      </Col>
    </Row>
  );
}

export default LeetCode;
