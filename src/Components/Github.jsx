import { Box } from '@chakra-ui/react';
import React from 'react'
import {Container, Image, Row } from 'react-bootstrap'
import GitHubCalendar from 'react-github-calendar';


const Github = () => {
  return (
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      Days I <strong className="purple">Code</strong>
    </h1>
    <GitHubCalendar className='"react-activity-calendar'
      username="dishagup"
      blockSize={15}
      blockMargin={5}
      color="#c084f5"
      fontSize={16}
    />
  </Row>
 <Row style={{ justifyContent: "center", paddingBottom: "10px",margin:'auto' }}>
 <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
  github <strong className="purple">Stats</strong>
 </h1>
 <Box>
<Image id='github-streak-stats' src='https://github-readme-streak-stats.herokuapp.com?user=dishagup&theme=aura&hide_border=true' />
 </Box>
 <br />
 <Box>
<Image id='github-top-langs' src='https://github-readme-stats.vercel.app/api/top-langs/?username=dishagup&layout=compact&theme=aura' />
 </Box>
 <br />
 <Box>
<Image id='github-stats-card' src='https://github-readme-stats.vercel.app/api?username=dishagup&show_icons=true&theme=aura' />
 </Box>
 
</Row>
</Container>
  )
}

export default Github