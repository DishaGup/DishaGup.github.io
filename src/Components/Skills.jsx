import { Box, Image,Flex, SimpleGrid,Text, GridItem } from "@chakra-ui/react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";




const arrtechstack=['https://th.bing.com/th/id/OIP.eQRqVTzi6ep_wZku3iDmEAHaIZ?pid=ImgDet&rs=1','https://nazmins28.github.io/img/nodejslogo.png','https://nazmins28.github.io/img/React-icon.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png','https://nazmins28.github.io/img/htmllogo.png','https://th.bing.com/th/id/OIP.gHXp-52eTTirgdriSMbb0AHaHa?pid=ImgDet&rs=1','https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png' ]
const arrtoolstack=['https://cdn.cdnlogo.com/logos/v/83/vs-code.svg','https://cdn.worldvectorlogo.com/logos/postman.svg','https://yt3.ggpht.com/a/AATXAJxYGxtZ8ZffTsTQSgxIS8MaYflyYvmve7IaGQ=s900-c-k-c0xffffffff-no-rj-mo','https://cdn.cdnlogo.com/logos/n/91/netlify.svg','https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png']


function Techstack() {
  return (
<SimpleGrid minChildWidth='150px' justifyContent= "center" paddingBottom= "40px" g={8} >
{arrtechstack.map((el,i)=>(
  
   <GridItem xs={4} md={2} key={i+1}  className='skills-card' >
   <Text fontSize='36px' className="skills-card-name" color='blue' display='none' >html</Text>
 <Image h='auto' objectFit='cover' className="skills-card-img" src={`${el}`} />
             </GridItem>
            
))}
</SimpleGrid>




  );
}

function Toolstack() {
  return (
    <SimpleGrid minChildWidth='150px' justifyContent= "center" paddingBottom= "40px" g={5} >
    {arrtoolstack.map((el,i)=>(
      
       <GridItem xs={4} md={2} key={i+1}  className='skills-card' >
       <Text fontSize='36px' className="skills-card-name" color='blue' display='none' >html</Text>
     <Image h='auto' objectFit='cover' className="skills-card-img" src={`${el}`} />
                 </GridItem >
                
    ))}
    </SimpleGrid>
    
  );
}



const Skills = () => {
  return (
    <Container fluid className="about-sections" style={{width:'90%',margin:'auto'}} id='skills'  >
   
    <Container>
    
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </Container>
  </Container>



  )
}

export default Skills