
// import {FaGithub} from 'react-icons/fa'
// import {FcLink} from 'react-icons/fc'
// import { Grid,HStack ,Box,Image,Heading,Text,Icon, GridItem} from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Projects = () => {

// const works=[
//     {image:'homeDecor.png',
//         title:'homeDecor',
//         desc:'E-commerce Website for Furnitures',
//         github:'https://github.com/DishaGup/eminent-trucks-727' ,
//         deployed:'https://extraordinary-tartufo-1cb77e.netlify.app/' ,
//         tech:['HTML','CSS','Javascript']},
//         {image:'homeDecor.png',
//         title:'homeDecor',
//         desc:'E-commerce Website for Furnitures',
//         github:'https://github.com/DishaGup/eminent-trucks-727' ,
//         deployed:'https://extraordinary-tartufo-1cb77e.netlify.app/' ,
//         tech:['HTML','CSS','Javascript']},

// ]

// const styles={
  
// }




//   return (
//     <Box w='80%' m='100px auto'  >

//         <Grid templateColumns='repeat(2, 1fr)' gap={20} >

// {
//     works.map((el)=><ProjectCard {...el} />)
// }
// </Grid>
//     </Box>
//   )
// }




// const ProjectCard=({image,title,desc,github,deployed,tech})=>{


//     // const styles = {
//     //     color: "rgb(88, 96, 105)",
//     //     backgroundColor: "rgb(255, 255, 255)",
//     //     boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
//     //     padding: "2rem",
//     //     cursor: "pointer",
//     //     borderRadius: "5px",
//     //     height: "100%",
//     //     transition: "all 0.2s ease-in-out",
//     //     ":hover": {
//     //       boxShadow: '0 0 2px 15px' 
//     //     },
//     //   };
//     //   // `${theme.imageDark} 0 2px 15px`,


// return(
//     <>
//     <GridItem p={10}  g={5}>
//     <Box  className='project-card'  >
//    <Box borderRadius={13}  boxShadow='md' p='6' rounded='md' bg='blue.600' ><Image p={12} src={image}  /></Box> 
//     <Heading  fontSize='28px' color='linkedin.400'  fontWeight='700' className='project-title' >{title}</Heading>
//    <Text className='project-description'  fontSize='16px'  fontWeight='400'  >{desc}</Text>
//    <HStack className='project-tech-stack'  fontSize='18px'  fontWeight='600'  >{tech.map((el)=><Heading textShadow='base' >{el}</Heading>)}</HStack>
//   <HStack  h='1cm' w='90%' m='15px auto' justify={'space-between'}>
//     <Link target='_blank' to={github} w='100%' className='project-github-link' ><Icon as={FaGithub} boxSize={23} /> </Link>
//    <Link  target='_blank' to={deployed} w='100%' className='project-deployed-link' > <Icon as={FcLink} boxSize={23}/> </Link>
//   </HStack>
//     </Box></GridItem>
//     </>
// )

// }


// export default Projects