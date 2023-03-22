import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {HStack,Box,Icon,Text, Button, Flex, TagLeftIcon,  Tag,
  TagLabel,
 } from '@chakra-ui/react'
import{FcHome,FcAbout,FcPositiveDynamic,FcBusinessContact,FcGallery} from 'react-icons/fc'

const Navbar = () => {
  return (
 
<>

<Flex  id='nav-menu' bgColor='#264653' h='1.5cm' position='sticky' top='0' mx='30px'w='full' borderBottomRadius='30px' zIndex={100} >
  <Box w='38%'  ></Box>
  <HStack   bgColor={'blackAlpha.200'} w='60%' m='auto' alignItems={'flex-end'} alignSelf={'flex-end'} align='right' justifyContent='space-between' > 
    <NavbarCompo iconname={FcHome} id="home" text='HOME' linkname='/' />
    <NavbarCompo  iconname={FcAbout} text='ABOUT ME' id="about" class="about section" linkname='/about'  />
    <NavbarCompo iconname={FcPositiveDynamic} id="skills" text='SKILLS' linkname='/skills' />
    <NavbarCompo iconname={FcGallery} text='PROJECT' id="projects" linkname='/project' />
    <NavbarCompo iconname={FcBusinessContact} id="contact" text='CONTACT' linkname='/contact' />
      <Link to='/resume'><Button colorScheme='white'color={'white'} >RESUME </Button></Link> 
     </HStack>
</Flex>
</>


  )
}

export default Navbar


const NavbarCompo=({iconname,text,linkname})=>{

  return(
    <>
    <NavLink to={linkname} style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      color:isActive?'yellow':'floralwhite'
    };
  }} > 
    {/* //<HStack spacing={3} color='white' > */}
  <Tag  variant='solid' colorScheme='cyan' size='lg' >
      <TagLeftIcon boxSize='18px' as={iconname} />
      <TagLabel fontWeight={600} spacing='1px' >{text}</TagLabel>
    </Tag>
  
{/* </HStack> */}
</NavLink>
   
  
    </>
  )
}

