import "./Aboutcontent.css"
import React from 'react'
import react1 from "../../assets/react1.png"
import react2 from "../../assets/react 2.jpg"
import { FaReact,FaHtml5,FaJava, } from "react-icons/fa";
import { DiCss3, DiJava, DiJavascript, DiJavascript1 } from "react-icons/di";
import { Link } from "react-router-dom"
const AboutContent = () => {
  return (
    <>
    <div className="About">
   <div className="left">
<h1>Who <span>Am </span>I</h1>
<p style={{fontStyle:"normal"}}>Hi Everyone,I am <span>Bhawana Jadaun</span> from <span>Aligarh, India</span>I have Completed My Graduation in <span>(BCA) Bachelor Of computer Application </span>from <span>SSLD Varshney Engineering College</span><br/><br/>

Apart from coding, some other activities that I love to do!
<br/> 👉Playing Games<br/>
👉Writing Tech Blogs<br/>
👉Travelling</p>
<Link to = "/contact">
<button className="btn">Contact</button>
</Link>
   </div>
   <div className="right">
<div className="image-container">
 <div className="img-stack top">
<img src = {react1} className="img"alt="true"/>
 </div>
 <div className="img-stack bottom">
<img src = {react2} className="img"alt="true"/>
 </div>
</div>
   </div>
    </div>
    {/* Skill Set */}
    <div className="Skill">
    <h1 style={{color:"white",justifyContent:"center"}}>Professional <span>SkillSet</span></h1>
    <div class="row">
  <div class="col">
    <FaReact style={{color:"#fff",border: "2px solid slateblue"}} className="React"/>
  </div>
  <div class="col">
    <FaHtml5 style={{color:"#fff",border: "2px solid slateblue"}} className="html"/>
  </div>
  <div class="col">
    <DiCss3 style={{color:"#fff",border: "2px solid slateblue"}} className="css"/>
  </div>
  <div class="col">
    <DiJava style={{color:"#fff",border: "2px solid slateblue"}} className="java"/>
  </div>
  <div class="col">
    <DiJavascript1 style={{color:"#fff",border: "2px solid slateblue"}} className="javascript"/>
  </div>
</div>

    {/* <div className="row">
 
      <div className="col">
      <FaReact 
      
      </div>
      <div className="col">
      <FaHtml5
         style={{color:"#fff",border: "2px solid slateblue"}}/>
      
      </div>
      <div className="col">
      <DiCss3 
         style={{color:"#fff",border: "2px solid slateblue"}}/>
    
      </div>
      <div className="col">
      <DiJava  style={{color:"#fff",border: "2px solid slateblue"}}/>
      </div>
    </div> */}

    </div>
    </>
  )
}

export default AboutContent