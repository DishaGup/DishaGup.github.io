import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../../Components/Partclebackground";
import Particle from "../Background/Particle";
// import homeLogo from "../../Assets/home-main.svg";
import { loadFull } from "tsparticles";
import  homeimage from '../../Assests/homeimage.jpg'
import Home2 from "./Home2";
import Type from "./Type";
import { Button, Flex } from "@chakra-ui/react";
import { resumeLink } from "../Resume/ResumeNew";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section className="nav-link home">
      <Container fluid className="home-section" id="home">
     <Particle/>
        <Flex className="home-content" justify={'space-around'}  >
          <Row>
               <Col md={5} style={{ paddingBottom: 20 }}>
              <img 
                src={homeimage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px",borderRadius:'30%' }}
              />
            </Col>
            </Row>
            <Row>
            <Col md={7} className="home-header" id='user-detail-name'  >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DISHA GUPTA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>           
          </Row>
        
        </Flex>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;