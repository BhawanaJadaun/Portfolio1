import "./Card.css"
import Card from "./Card";
import Workcarddata from "./Workcarddata"
//Portfolio
const Work = () => {
  return (
    <div className="WorkContainer">
    <h1 className="project-heading">Projects</h1>
    <div className="Project-container">
   {Workcarddata.map((val,ind) => {
    return(
      <Card key = {ind}
        imgsrc = {val.imgsrc}
        title = {val.title}
        text = {val.text}
        view = {val.view}
      />

    )
   })}
    </div>
    </div>
  )
}

export default Work;