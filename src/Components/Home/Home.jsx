import "./Home.css"
import  Typewriter from 'typewriter-effect';
import hand from "../../assets/hand.png"
import MyImg from "../../assets/My.jpg"
const Home = () => {
  return (
    <div className="home-page">
    <div className="home-left">
    <div className="text">
    <h3>Hey, I'Am <img src= {hand} alt="" className="hand_icon"/></h3>
      <h1 style={{fontSize:"60px"}}><strong>BhawanaJadaun</strong></h1>
      <h4>  <Typewriter 
              options={{
                autoStart:true,
                loop:true,
                delay:80, 
               
                strings:[ "Frontend Developer.","Backend Developer.","Fullstack Developer."]

              
              }}>
            </Typewriter> 
            
            <span> 

           
              </span>
            </h4> 
       
      <p>A <span>Front-End Devloper </span>passionate about creating <br/>
      intractive application and Experience on the Web</p>
      </div>
      <div className="button">
        <button id = "about">About Me</button>
        <button id="work">My Works</button>
    </div>
    </div>
    <div className="right">
    <img src = {MyImg}/>
    </div>
    </div>
  )
}

export default Home