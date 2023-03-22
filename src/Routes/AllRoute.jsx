import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Compo/Homes/Home'
import Projects from '../Compo/Projects/Project'
import ResumeNew from '../Compo/Resume/ResumeNew'

import About from '../Components/About'
import Contact from '../Components/Contact'


import Skills from '../Components/Skills'

const AllRoute = () => {
  return (
<Routes>
<Route path='/' element={ <Home/> }  />
<Route path='/about' element={<About/>}  />
<Route path='/skills' element={<Skills/> } />
<Route path='/project' element={<Projects/>} />
<Route path='/contact' element={<Contact/> } />
<Route path='/resume' element={ <ResumeNew/> }  />
</Routes>    


  )
}

export default AllRoute