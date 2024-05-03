import "./Services.css"
import img1 from "../../assets/Website.png"
import img2 from "../../assets/custom.png"
import img3 from "../../assets/fileCov.png"
const Services = () => {
  return (
    <>
  
      <h1 className="h1">Services</h1>
      <h2 className="h2">What We Do</h2>
      <div className="cards">
        <div className="card">
        <img src={img1} className="img-1 white-image"/>
          <h2>Website Creation</h2><br/>
          <p>I will build any kind of fully Responsive Website for your Business.</p>
        </div>
        <div className="card">
        <img src={img2} className="img-2 white-image"/>
          <h2>Cusmtoization</h2><br/>
          <p>I will do any customization for your prebuild HTML Website.</p>
        </div>
        <div className="card">
        <img src={img3} className="img-3 white-image" />
          <h2>File Conversion</h2><br/>
          <p>I will convert PSD to HTML, Figma to HTML websites and vice versa.</p>
        </div>
      </div>
      </>
  )
}

export default Services