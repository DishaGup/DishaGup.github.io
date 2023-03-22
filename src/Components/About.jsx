import { Box, Center, Heading, VStack,Image, Flex, HStack,Text, Button } from '@chakra-ui/react'
import React from 'react'
import AboutCard from '../Compo/About/AboutCard'
import { Container, Row, Col } from "react-bootstrap";
import photodiv from '../Assests/photoabout.png'
import { AiOutlineDownload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const About = () => {

  
  return (

    <Container fluid className="about section" id="about" style={{width:'90%',margin:'auto'}}  >
   
    <Flex justify={'space-between'}>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", padding: "20px",color:'white' }}>
            Know Who <strong className="purple">I'M</strong>
          </h1>
         <AboutCard/>
        </Col>
        <Col>
        <Button zIndex={800} id="resume-button-2" variant='ouline' border='2px solid white' borderRadius={15} p={15} > <Link id="resume-link-2"  to='https://drive.google.com/file/d/1OCOYLpZTUJtfit6cIrK7ZVbHAwBOXU3X/view?usp=sharing'  variant="primary"  target="_blank"  style={{ maxWidth: "250px",color:'white' }}>
            <AiOutlineDownload color='white'/>
            &nbsp;Download CV
            </Link>  </Button>
        </Col>
        
        
        </Row>
        <Row style={{ justifyContent: "right", padding: "10px" }}>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={photodiv} style={{borderRadius:'100px'}} alt="about" className="home-img" />
        </Col>
      
      </Row>
  

    </Flex>
    </Container>
  )
}

export default About