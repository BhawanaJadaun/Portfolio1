import "./Skill.css"

const Skill = () => {
  return (
    <>
     <div className="container">
    <h1 className="h1">Skills</h1>
            <div className="skill-box">
                <span className="title">HTML5</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS3</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">TAILWANDCSS</span>
                <div className="skill-bar">
                    <span className="skill-per Tailwand">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JAVA</span>
                <div className="skill-bar">
                    <span className="skill-per java">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Skill