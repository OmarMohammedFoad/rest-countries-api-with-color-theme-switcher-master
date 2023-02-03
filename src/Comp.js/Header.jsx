import "./Header.css"
import { HiOutlineMoon } from "react-icons/hi";
import {Link} from "react-router-dom"


 function Header(props)
{
  
 function Toggleinheader ()
 {
  
    props.Toggle()
 }
 
    return <>
    <div className="header">
    <nav>
     <h1 > Where to in World</h1> 
        
   <button  onClick={Toggleinheader}  className="button flex flex-ai-c flex-jc-c">
        <HiOutlineMoon className="hiouline" />
          <span className="span-1">Dark Mode</span>
          
        </button>
    </nav>
    </div>
    </>
}

export  default Header