import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Particle from "../Particle";
import homeDecor from '../../Assests/homeDecor.png'
import wrapup from '../../Assests/wrapup.png'
import ProjectCards from "./Projectcard";

function Projects() {
  return (
    <Container fluid className='nav-link projects' >
      {/* <Particle /> */}
      <Container style={{textAlign:'center'}} >
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}className="project-card-main">
            <ProjectCards
              imgPath={homeDecor}
              isBlog={false}
              title="homeDecor"
              tech='HTML  |  CSS  |   JAVASCRIPT'
              description="Home Decor is a online-e-commerce website for customised furnitures. An Collaborative project built and executed in 5 days."
              ghLink="https://github.com/DishaGup/eminent-trucks-727"
              demoLink="https://extraordinary-tartufo-1cb77e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card-main">
            <ProjectCards
              imgPath={wrapup}
              isBlog={false}
              title="wrapUp"
              tech='REACT  |   CHAKRA UI  |  JAVASCRIPT '
              description="Wrapup is a project management company. It lets users to set the timeline, divides the task among team collaboators, and reminds them with the task and deadlines. It also offers user a template category to create their own space.
It is a SOLO project"
              ghLink="https://github.com/DishaGup/pink-pot-9002"
              demoLink="https://wrap-up.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
