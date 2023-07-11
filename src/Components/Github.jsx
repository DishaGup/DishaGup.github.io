import { Box ,useColorModeValue} from '@chakra-ui/react';
import React from 'react'
import { useContext } from 'react';
import {Container, Image, Row } from 'react-bootstrap'
import GitHubCalendar from 'react-github-calendar';
import { context } from '../utility/ContextProvider';
import { CONFETTI_DARK, CONFETTI_LIGHT } from './Contact';


const Github = () => {

const {textcolour}=useContext(context)

  return (
    <Container     css={{
      backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
      backgroundAttachment: 'fixed',
    }}>
    <Row style={{ justifyContent: "center", paddingBottom: "10px",color:'white' }}  >
    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      Days I <strong className={textcolour}>Code</strong>
    </h1>
    <GitHubCalendar  className={`react-activity-calendar`}
      username="dishagup"
      blockSize={15}
      blockMargin={5}
      color={textcolour}
      fontSize={16}
    />
  </Row>

 <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
  Github <strong className={textcolour}>Stats</strong>
 </h1>
 <Box align='center' >
<Image id='github-streak-stats' w='full' src='https://github-readme-streak-stats.herokuapp.com?user=dishagup&theme=aura' />
 </Box>
 <br />
 <Box align='center'  >
<Image id='github-top-langs' src='https://github-readme-stats.vercel.app/api/top-langs/?username=dishagup&layout=compact&theme=aura' />
 </Box>
 <br />
 <Box  align='center'  >
<Image id='github-stats-card' src='https://github-readme-stats.vercel.app/api?username=dishagup&show_icons=true&theme=aura' />
 </Box>
 

</Container>
  )
}

export default Github