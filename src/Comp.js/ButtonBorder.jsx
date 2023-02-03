import { Link } from "react-router-dom";
import country from '../data.json';
import "./CountryDetails.css"

export default function ButtonBorder(props)
{
     
    return <>
    {   country.filter(country=>country.alpha3Code.includes(props.border)).map(name=>
        <Link className="buttonborder" to={`/details/${name.name}`} >
                {props.border}
        </Link>
)}
    </>
}