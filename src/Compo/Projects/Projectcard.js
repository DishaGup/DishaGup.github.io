import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { HStack, textDecoration } from "@chakra-ui/react";

function ProjectCards(props) {
  return (
    <Card className="project-card" style={{width:'600px',justifyContent:'center',margin:'auto'}}  >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-title" style={{fontSize:'30px',textDecorationLine:'underline',margin:'12px'  }}  >{props.title}</Card.Title>
        <Card.Text className="project-description" style={{ textAlign: "justify",fontSize:'16px' }}>
          {props.description}
        </Card.Text>
        <Card.Text className="project-tech-stack" style={{ textAlign: "justify",fontSize:'20px',color:'#623686',fontWeight:'700',margin:'10px'  }}>
          {props.tech}
        </Card.Text>

  <HStack  justify={"space-around"} >   

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button> 
        )}</HStack>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;