import "./Footer.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p style={{fontStyle:"normal" }}>Designed and developed by Bhawana Jadaun ❤︎</p>
      </div>
    </footer>
    // <div className="footer">
    //   <div className="first">
        /* <h1>Designed and Developed by Bhawana Jadaun</h1>
      </div>
      <div className="second">
        <h1>Copyright © 2024 BJ</h1>
      </div>
      <div className="social">
        <FaTwitter size={30} />
        <FaLinkedin size={30} />
        <FaGithub size={30} />
        <FaInstagramSquare size={30} />
      </div>
    </div> */
  );
};

export default Footer;


