import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { context } from "../../utility/ContextProvider";


function Home2() {

const {textcolour} =useContext(context)
  return (
    <Container fluid className="home-about-section" >
      <Container >
        <Row>
          <Col md={8} className="home-about-description" >
            <h1 style={{ fontSize: "2.6em" }}>
              My <span className={textcolour}> INTRODUCTION </span> <span style={{fontSize:'16px'}}>About me</span>
            </h1>
            <p className="home-about-body" id='user-detail-intro'>
  An Aspiring <b className={textcolour}> Full Stack Web Developer </b> with a proven
  quality to adept in both Self Starting and Collaborative Environment.
 <br />
             
              I fell in love with programming especially DSA & Coding and I have at least learnt
              something, I think… 🤷‍♂️
             
               <br />I am fluent in classics like
              <i>
                <b className={textcolour}> React, JavaScript and TypeScript. </b>
              </i> 
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className={textcolour}>Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className={textcolour}>
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
          
              Whenever possible, I also apply my passion for developing products
              with <b className={textcolour}>Node.js</b> and
              <i>
                <b className={textcolour}>
                  {" "}
                  Modern Javascript Library and Frameworks along MERN Technologies,
                </b>
              </i>
              &nbsp; like
              <i>
                <b className={textcolour}> React.js, TypesSript, React-Redux </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}
export default Home2;