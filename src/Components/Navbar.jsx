import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import pdf from '../Assests/Disha_Gupta_Resume.pdf'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {HStack,Icon,Text, Button, Flex, TagLeftIcon,  Tag, TagLabel,Stack, useDisclosure,Box, Avatar, Menu,MenuButton, MenuList, MenuItem, MenuDivider,  useColorModeValue,
  useColorMode,  Center,IconButton, VStack,Drawer,DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton,
  Tooltip, } from '@chakra-ui/react'
import{FcHome,FcDownload,FcAbout,FcPositiveDynamic,FcBusinessContact,FcGallery,FcMenu,FcPrevious} from 'react-icons/fc'

import {FaSun,FaMoon} from 'react-icons/fa'
import { resumeLink } from '../Compo/Resume/ResumeNew';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);

  const handleResume=()=>{
    window.open(resumeLink)
  }
  const navdata=[
    {
      iconname:'FcHome', classs:"nav-link home" ,text:'HOME' ,linkname:'home' 
    },{
      iconname:'FcAbout' ,text:'ABOUT ME',  classs:"nav-link about", linkname:'about' 
    }
  
  ]
  return (
<>
<Flex justify={'space-between'}  id='nav-menu' bgColor='#264653' h='1.5cm' position='fixed' top='0' w='full' borderBottomRadius='20px' zIndex={100} >
    <IconButton ml={20}
          fontSize='28px' color='white'
            icon={isOpen ? <FcPrevious  /> : <FcMenu   />}
             onClick={isOpen?onClose:onOpen}
            // display={{base:'block',md:'none',xl:'none'}}
           class='burger-icon'
          /> 
          
          <Box w='10%'></Box> 

        

<HStack className='nav-items'id='mobile-nav-display' bgColor={'blackAlpha.200'} w='80%' m='auto' my='15px'   align='center' justifyContent='space-between' mr='20px' > 
    <NavbarCompo iconname={FcHome} classs="nav-link home" text='HOME' linkname='home'  />
    <NavbarCompo  iconname={FcAbout} text='ABOUT ME'  classs="nav-link about" linkname='about'  />
    <NavbarCompo iconname={FcPositiveDynamic}  text='SKILLS'  classs="nav-link skills" linkname='skills' />
    <NavbarCompo iconname={FcGallery} text='PROJECT' classs="nav-link projects" linkname='projects' />
    <NavbarCompo iconname={FcBusinessContact} classs="nav-link contact" text='CONTACT' linkname='contact' />
    <button id="resume-button-1" className='nav-link resume'  onClick={handleResume}        >
                <a
                  id="resume-link-1"
                  href={pdf}
                  download="Disha_Gupta_Resume"
                  target="_blank"
                
                  rel="noreferrer"
                >
                  Resume <Icon as={FcDownload}/>
                </a>
              </button>
   
     </HStack>
  
 </Flex>

  {isOpen &&  <DrawerExample  onOpen={onOpen} isOpen={isOpen} onClose={onClose} />} 



</>

  )
}

export default Navbar



export const NavbarCompo=({iconname,text,linkname,classs,activeClass})=>{
  return(
    <>
    <Link to={linkname} activeStyle={{borderBottom:'2px solid white'}} spy={true}  id='link-scroll'  activeClass={activeClass} smooth={true}  className={classs} >
  <Tag _hover={{cursor:'pointer'}} variant='solid' bg='0 0' size='lg'   >
      <TagLeftIcon boxSize='18px' as={iconname} />
      <TagLabel fontWeight={600} spacing='1px' >{text}</TagLabel>
    </Tag>
</Link>
    </>
  )
}
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};



function DrawerExample({ isOpen, onOpen, onClose }) {
  
 

  return (
    <>
        <Drawer
        isOpen={isOpen}
        placement='right'
      
        mt='10px'
              onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  color='white' />
        
          <DrawerBody bg='#264653'>
          <main>
       <AnimatePresence>
         
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 300,
              y:0
            }}
            exit={{
              width: 0,
              y:-100,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            
            >
              <motion.a
                 whileHover={{ scale: 1.02 }}
                variants={itemVariants}
                >
     <NavbarCompo iconname={FcHome} classs="nav-link home" text='HOME' linkname='home' activeClass={'activeClass'} />
                  </motion.a>
                <motion.a
                 whileHover={{ scale: 1.02 }}
                variants={itemVariants}
                >
       <NavbarCompo  iconname={FcAbout} text='ABOUT ME'  classs="nav-link about" linkname='about'  />
                   </motion.a>
                <motion.a
                 whileHover={{ scale: 1.02 }}
                variants={itemVariants}
                >
     <NavbarCompo iconname={FcPositiveDynamic}  text='SKILLS'  classs="nav-link skills" linkname='skills' />
  
                </motion.a>
                <motion.a
                 whileHover={{ scale: 1.02 }}
                variants={itemVariants}
                >
     <NavbarCompo iconname={FcGallery} text='PROJECT' classs="nav-link projects" linkname='projects' />
            </motion.a>
                <motion.a
                 whileHover={{ scale: 1.02 }}
                variants={itemVariants}
                >
   <NavbarCompo iconname={FcBusinessContact} classs="nav-link contact" text='CONTACT' linkname='contact' />
     
                </motion.a>
                <motion.a
                 whileHover={{ scale: 1.02 }}
                variants={itemVariants}
                >
     <Link className="nav-link resume" to='myresume'><Button colorScheme='white'color={'white'} >RESUME </Button></Link> 
    
                </motion.a>
            </motion.div>
          </motion.div></AnimatePresence>
     </main>
          </DrawerBody>
        
        </DrawerContent>
      </Drawer>
       
    </>
  )
}