import { Link } from "react-router-dom";
import country from '../data.json';


const Button ={
    "border":"none",
    "height":"100%",
    "width":"60px",
    "text-align":"center" ,
    "box-shadow": "0 0 15px rgba(0,0,0,.15)",
    "border-radius":"5px",
    "font-weight":200,
    "textDecoration": "none",
    color: 'black'

    
}
export default function     ButtonBorder(props)
{
     
    return <>
    {   country.filter(country=>country.alpha3Code.includes(props.border)).map(name=>
        <Link  style={Button} to={`/details/${name.name}`} >
                {props.border}
        </Link>
)}
    </>
}