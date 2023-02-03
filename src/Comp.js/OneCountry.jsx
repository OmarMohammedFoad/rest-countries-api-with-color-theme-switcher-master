import "./Home.css"
import {Link} from "react-router-dom"

export default function OneCountry(props)
{
    
    const {content} = props
    return <>
   
      <Link className="card" to={`details/${content.name}`}  >
      {/* <div className=""> */}
    <img src={content.flags.svg} className="card-img-top" alt={content.name}/>
     <div className="card-body">
    <h5 className="card-text"   >{content.name}</h5>
    <p>    <span className="nothing">population</span> :            {content.population}</p>
    <p>    <span className="nothing">region</span> :          {content.region}</p>
    <p>    <span className="nothing">capital</span> :          {content.capital}</p>
  </div>
  {/* </div> */}
  </Link>
  
  </>
}