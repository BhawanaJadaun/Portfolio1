import React, { useState } from 'react';
import "./Form.css"
import { MdAddCall } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Form = () => {

  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', 'a6adbe23-61c1-4e76-b313-9c3a8b39aa74');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error:', data);
        setResult(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setResult('An error occurred while submitting the form');
    }
  };

  return (
    <>
    <Navbar/>
    <div className='heading'>
    <h5>Contact <span>Us </span></h5></div>
    <div className='container'>
    <div className='detail'>
      <FaLocationDot style={{color:"white",fontSize:"60px"}} className='location'/>
      <p>Gopi, Aligarh</p>
      <MdAddCall style={{color:"white",fontSize:"60px"}}/>
      <p>91+7534666666</p>
      <FaMailBulk style={{color:"white",fontSize:"60px"}}/>
      <p>bhawanajadaun0001@gmail.com</p>
    </div>
     <div className='Contact'>
   
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={5}required style={{fontSize:"20px",color:"#fff"}}></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Form;
