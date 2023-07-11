import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Particle from "../Particle";
import homeDecor from '../../Assests/homeDecor.png'
import wrapup from '../../Assests/wrapup.png'
import ProjectCards from "./Projectcard";
import { context } from "../../utility/ContextProvider";
import { Grid, GridItem, SimpleGrid,useColorModeValue ,Box} from "@chakra-ui/react";
import { CONFETTI_DARK, CONFETTI_LIGHT } from "../../Components/Contact";

function Projects() {
  const {textcolour} =useContext(context)
  
  return (
    <Box id="projects"  >
    <Container fluid  >
      <Container style={{textAlign:'center'}} >
        <h1 className="project-heading">
          My Recent <strong className={textcolour}>Works </strong>
        </h1> <span style={{fontSize:'16px'}} >Projects</span>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>


<Grid  gridTemplateColumns={{base:'1fr',md:'1fr 1fr'}} rowGap={'20px'} colGap='40px' m='auto'   >
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
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
</GridItem>
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
            <ProjectCards
              imgPath={'https://github.com/DishaGup/eminent-art-8078/assets/115460391/8bc6dfe0-bd22-4221-b483-b2092808f4b9'}
              isBlog={false}
              title="Trendify"
              tech='REACT  |  REDUX  |   NODE.JS  |  MONGODB'
              description="Trendify is an Scalable e-commerce website for all Products. An Collaborative project built and executed in 5 days. 
              I have created Backened using MERN stack and also worked upon Product Page and its functionality includes sorting and filtering based on different category
                      "
              ghLink="https://github.com/DishaGup/eminent-art-8078"
              demoLink="https://trendify-omega.vercel.app/"
            />
          </Col>
</GridItem>
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
            <ProjectCards
              imgPath={'https://github.com/Shanky43/subdued-stocking-2928/blob/main/frontend/src/Assests/HomePage%20Image.png?raw=true'}
              isBlog={false}
              title="Health Cube"
              tech='REACT  |  REDUX  |   NODE.JS  |  MONGODB'
              description="HealthCube is an e-commerce website of Medicines. An Collaborative project built and executed in 5 days."
              ghLink="https://github.com/DishaGup/subdued-stocking-2928"
              demoLink="https://healthcube-bisht1418.vercel.app/"
            />
          </Col>  
</GridItem>
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
<ProjectCards
              imgPath={homeDecor}
              isBlog={false}
              title="homeDecor"
              tech='Python  |  Open AI  |   Flask  | HTML5'
              description="Home Decor is a online-e-commerce website for customised furnitures. An Collaborative project built and executed in 5 days."
              ghLink="https://github.com/DishaGup/eminent-trucks-727"
              demoLink="https://extraordinary-tartufo-1cb77e.netlify.app/"
            />
          </Col>  
</GridItem>



<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
            <ProjectCards
              imgPath={'https://user-images.githubusercontent.com/115460391/251097537-8fe33048-9620-4b82-9711-d6d927219c50.png'}
              isBlog={false}
              title="Story Generator"
              tech='Python  |  Open AI  |   Flask  | HTML5'
              description="This is a frontend project built with React. It utilizes the OpenAI API to generate humorous stories based on provided keywords. The generated stories are displayed on the frontend."
              ghLink="https://github.com/DishaGup/story-generator"
              demoLink="https://story-khaki-six.vercel.app/"
            />
          </Col>
</GridItem>
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
            <ProjectCards
              imgPath={'https://user-images.githubusercontent.com/115460391/250889830-e713ae0f-376c-43ec-8b7c-a229a71d04eb.png'}
              isBlog={false}
              title="Live Crypto Market"
              tech='NODE.JS  |  REACT |   REDUX  | CHAKRA UI'
              description="This project aims to develop a website that provides live stock market data to users. It will serve as a platform where users can access real-time information about stocks and crypto, including current prices, price changes, market capitalization, and other relevant data."
              ghLink="https://github.com/DishaGup/pink_purple_palace"
              
            />
          </Col>
</GridItem>
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
            <ProjectCards
              imgPath={'https://masai-school.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fccdc2380-d5df-4570-90c7-bb9f10537943%2FUntitled.png?id=d11273bb-7fd0-4848-b1d6-ce189677c398&table=block&spaceId=ff94b4dd-cb13-4ede-8019-d6a8215bf3d5&width=2000&userId=&cache=v2'}
              isBlog={false}
              title="Rock Paper & Scissors Game"
              tech='Python  |  Open AI  |   Flask  | HTML5  | CLI based'
              description="A simple web-based Rock, Paper, Scissors game built using Flask and JavaScript."
              ghLink="https://github.com/DishaGup/rock-paper-scissors"
              
            />
          </Col>
</GridItem>
<GridItem>
<Col md={4}className="project-card-main" w='50%' m='auto' >
            <ProjectCards
              imgPath={'https://code.visualstudio.com/assets/docs/editor/command-line/tunnel-help.png'}
              isBlog={false}
              title="Delhi Munchies: The Canteen"
              tech='Python3  |  Open AI'
              description="This command-line application is designed to manage the snack inventory of the canteen and keep track of sales. It allows canteen staff to add, remove, and update snacks in the inventory, as well as record sales."
              ghLink="https://github.com/DishaGup/Delhi-Munchies"
              
            />
          </Col>
</GridItem>
</Grid>
      </Container>
    </Container></Box>
  );
}

export default Projects;
