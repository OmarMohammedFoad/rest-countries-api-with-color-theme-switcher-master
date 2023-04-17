// import "./Header.css"
import { HiOutlineMoon } from "react-icons/hi";
import styled from "styled-components";


const Head = styled.div`
  width:auto;
  display:flex;
  flex-direction:row;
  padding:25px 0  25px 25px;
  height:10px;
  box-shadow: 0 0 15px rgba(0,0,0,.15);
  background-color:hsl(0, 0%, 100%);
  font-weight:bolder;
  font-size:20px;
  @media (max-width: 1025px){
    display:flex;
    flex-flow:row;
 
   width:100%;

  }
  
`

const Button = styled.button` 
display:flex;
flex-direction:row;
gap:2px; 
padding-right:20px;
padding-bottom:30px; 
margin-left:auto;  
font-size:20px;
border:none;
background-color: hsl(0, 0%, 100%);
justify-items:center;
justify-content: center;;
`
  

 function Header(props)
{
  
 function Toggleinheader ()
 {
  
    props.Toggle()
 }
 
    return <Head>
    
   
      Where to in World?
        
   <Button  onClick={Toggleinheader}  >
        <HiOutlineMoon className="hiouline" />
          Dark Mode
          
        </Button>
    

    </Head>
}

export  default Header