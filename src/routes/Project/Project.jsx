import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero2 from '../../Components/Hero/Hero2'
import Work from '../../Components/Card/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading = "PROJECTS" 
      text = "Some of my most recent Works"/>
      <Work/>
      <Footer/>
     
    </div>
  )
}

export default Project