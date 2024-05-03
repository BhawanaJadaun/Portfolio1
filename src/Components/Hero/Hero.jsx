import "./Hero.css";
import { Link } from "react-router-dom";
import introimg from "../../assets/Hero.jpg";
import avtar from "../../assets/avtar1.jpg";
import hand_icon from "../../assets/hand.png";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introimg} alt="" />
</div>
        <div className="content">
          <p>
            Hi <img src={hand_icon} style={{ display: "inline-block" }} />' M
            Bhawana Jadaun
          </p>
          <h1>Frontend Developer</h1>

          <div>
            <Link to="/project" className="btn">
              PROJECTS
            </Link>
            <Link to="/contact" className="btn-light">
              CONTACT
            </Link>
          </div>
        </div>
        </div>
      
//  INtroduce
    <div className="Intro">
    <div className="left">
      <h1>Let Me <span>Introduce</span> MYSELF</h1>
     <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ <br/>
I am fluent in classics like <span>HTML5, CSS3
and JavaScript.</span><br/><br/>My field of Interest's are building new  <span>Web Technologies and Products </span>and also in areas related to<span> Blockchain.</span><br/><br/>
Whenever possible, I also apply my passion for developing products with <span>Node.js</span> and <span>Modern Javascript Library and Frameworks  </span>like <span>React.js and Next.js</span></p>
    </div>
    <div className="right">
       <img src= {avtar} style={{borderRadius:"80%",width:"250px",height:"230px"}}/> 
    </div>
    </div>
    {/* Follow me on */}
     <div className="follow" style={{textAlign:"center"}}>
       <h1>FIND <span>ME</span> ON</h1>
      <p>Feel Free to <span>Connect </span>with Me</p>
      <div className="social">
      <a href="https://github.com/BhawanaJadaun" style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"slateblue", background:"#fff", marginLeft: "4px", padding: "2px", width: "50px", height: "50px", borderRadius: "50%"}}>
  <FaGithub />
</a>
  <a href="https://www.instagram.com/bhawa_na448/" style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"slateblue", background:"#fff", marginLeft: "4px", padding: "2px", width: "50px", height: "50px", borderRadius: "50%"}}>
  <FaInstagramSquare/>
</a>
  <a href=  "https://www.linkedin.com/in/bhawana-jadaun-801674307/" style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"slateblue", background:"#fff", marginLeft: "4px", padding: "2px", width: "50px", height: "50px", borderRadius: "50%"}}>
  <FaLinkedin/>
</a>

<a href=  "" style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"slateblue", background:"#fff", marginLeft: "4px", padding: "2px", width: "50px", height: "50px", borderRadius: "50%"}}>
  <FaTwitter/>
</a>
  
      </div>
    </div> 
    </>
  );
};

export default Hero;
