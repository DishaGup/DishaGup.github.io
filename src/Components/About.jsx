import { Box, Center, Heading, VStack,Image, Flex, HStack,Text,Icon,useColorModeValue} from '@chakra-ui/react'
import React, { useContext } from 'react'
import AboutCard from '../Compo/About/AboutCard'
import { Container, Row, Col } from "react-bootstrap";
import photodiv from '../Assests/photoabout.png'
import { AiOutlineDownload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { pdfjs } from "react-pdf";
import Home2 from '../Compo/Homes/Home2';
import pdf from '../Assests/Disha_Gupta_Resume.pdf'
import Button from "react-bootstrap/Button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { resumeLink } from '../Compo/Resume/ResumeNew';
import { context } from '../utility/ContextProvider';
import { CONFETTI_DARK, CONFETTI_LIGHT } from './Contact';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const About = () => {

  const handleResume=()=>{
    window.open(resumeLink)
  }
  const {textcolour}=useContext(context)
  
  return (
<Box css={{
    
     zIndex: -1,
     backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
     backgroundAttachment: 'fixed',
    }}> 
    <Container  fluid className="about section" id="about" style={{width:'90%',margin:'auto'}}  >
     <Home2/>
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
          <h1  className="wave" role="img" aria-labelledby="wave" style={{ fontSize: "2.1em", padding: "20px",color:'white' }}>
            Know Who <strong className={textcolour}>I'M</strong>
          </h1>
         <AboutCard/>
        </Col>
        <Col >
        <Button id="resume-button-2" onClick={handleResume}       >
                <a  
                  id="resume-link-2"
                  href={pdf}
                
                  download="Disha_Gupta_Resume"
                  target="_blank"
                 // className={`${style.resumes} nav-link resume`}
                  rel="noreferrer"
                >
                  Resume <Icon as={AiOutlineDownload } />
                </a>
              </Button>
        </Col>
        
        
        </Row>
        <Row style={{ justifyContent: "right", padding: "10px" }}>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
      
          <Image src={photodiv} display={{base:'none',md:'block'}}  style={{borderRadius:'100px'}} alt="about" className="home-img" />
        </Col>
      
      </Row>
  

    </Flex>
    </Container>  </Box>
  )
}

export default About