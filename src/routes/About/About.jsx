import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero2 from '../../Components/Hero/Hero2'
import AboutContent from '../../Components/AboutContent/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading = "ABOUT." 
      text = "I' m a friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About