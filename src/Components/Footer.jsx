import React, { useContext } from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'react-scroll';
import { position } from '@chakra-ui/react';
import { context } from '../utility/ContextProvider';
const Footer = () => {

  const {textcolour}=useContext(context)

  return (
    <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className={textcolour}>connect </span>with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/DishaGup"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/dishagu31691783"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/disha-gupta-303b971a3/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/disha_gidollia/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </Col>


<Button style={{margin:'100px',position:'fixed',botton:'100px',left:'100px'}} ></Button>


  </Row>
  )
}

export default Footer