import React,{useContext, useState} from 'react'
import Home from '../Compo/Homes/Home'
import Projects from '../Compo/Projects/Project'
import ResumeNew from '../Compo/Resume/ResumeNew'
import {Accordion,Box,
  AccordionItem,
  AccordionButton,Stack,
  AccordionPanel, Radio, RadioGroup,Icon,
  AccordionIcon,Spinner} from '@chakra-ui/react'
import About from './About'
import {BiColor,BiCircle} from 'react-icons/bi'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import Skills from './Skills'
import { context } from '../utility/ContextProvider'


export const Portfolio = () => {


  return (
    <div style={{gap:'30px'}}  >
 <Navbar/>
<Home/>


<About/>
<br/>

<Skills/>
<br/>

<Projects/>
<br/>

<Contact/>
<br/>
{/* 
<ResumeNew/> */}
<Footer/>
<AccordianColour />
    </div>
  )
}

const AccordianColour=()=>{
  const {textcolour,settextcolour}=useContext(context)

const handlechangecolour=(e)=>{
 settextcolour(e.target.value)
}
//console.log(textcolour)

  return(
   
<Accordion allowToggle position='fixed' bottom='15px' right='45px' w='50px' border='0'>
  <AccordionItem>
    <h2>
      <AccordionButton fontSize='38px' className={textcolour} _expanded={{ bg: { textcolour }, color: 'white' }}>
        <Box as="span" flex='1' textAlign='left' fontSize='40px'>
          <Icon as={BiColor}  thickness='4px'
       className='spin-animation'  />
        </Box>
       <AccordionIcon  fontSize='20px'/>
      </AccordionButton>
    </h2>
      <AccordionPanel fontSize='30px' gap={5}   >
      <RadioGroup ml='10px' defaultValue='purple' >
  <Stack spacing={10} >
    <Radio  name='sortby' onChange={handlechangecolour}  backgroundColor='#FF5722'  fontSize='28px'  colorScheme='#FF5722' value='red'>
  
    </Radio>
    <Radio name='sortby' onChange={handlechangecolour}  backgroundColor='#4CAF50'  colorScheme='#4CAF50' value='green'>
  
    </Radio>
    <Radio name='sortby' onChange={handlechangecolour}  backgroundColor='#b562d6' colorScheme='#b562d6' value='purple'>
    
    </Radio>
     <Radio name='sortby' onChange={handlechangecolour} bg='#00BCD4'  colorScheme='#00BCD4' value='skyblue'>
    
    </Radio>
    <Radio name='sortby' onChange={handlechangecolour}  bg='#FFF176' colorScheme='#FFF176' value='yellow'>
  
    </Radio> 
    <Radio name='sortby' onChange={handlechangecolour}  color='#EA80FC' bg='#EA80FC' colorScheme='#EA80FC' value='pink'>
   
    </Radio>
  </Stack>
</RadioGroup>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

