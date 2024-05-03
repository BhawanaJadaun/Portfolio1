import "./About.css"
const About = () => {
  return (
    <>
    <h1 className="h1">About</h1>
    <div className="About">
    
      <div className="about-left">
      <h3>Full Name : <span>Bhawana Jadaun</span></h3>
      <h3>Qualification: <span>(B.C.A) Bachelor of Computer Application</span></h3>
      <h3>Address: <span>Gopi, Aligarh (UttarPradesh)India</span></h3>
      <h3>Email: <span>bhawanajadaun0001@gmail.com</span></h3>
      <h3>Age: <span>20</span></h3>
      
      </div>  
      <div className="about-right">
       
       <p1>Hello there! I am <span style={{color:"crimson"}}><strong> Bhawana Jadaun</strong></span>. I am a web designer & developer,
        and I'm very passionate and dedicated to my work.</p1>
       <p1>Innovative Frontend Developer with a passion 
       for creating dynamic and responsive web applications. 
       Adept in both frontend  development, with hands-on
        experience in HTML5, CSS3, JavaScript, React.js, 
        Rest API. Skilled in building and optimizing web
         applications, and continuously seeking to expand
          knowledge in emerging web technologies.</p1>
     </div>
      </div>
     </>
    
  )
}

export default About;