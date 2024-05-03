import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero2 from '../../Components/Hero/Hero2'
import Contact from '../../Components/Contact/Contact'
import Form from '../../Components/Form/Form'
const ContForm = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading = "CONTACT." text = "Lets have a chat"/>
   <Form/>
      <Footer/>

    </div>
  );
};

export default ContForm