import {Link} from "react-router-dom"
import styled from "styled-components";


const Container = styled.div`
  display:flex;
  flex-flow:column;
  padding:20px;

  
   

`
const MiniContainer = styled.div`
  background-color:hsl(0, 0%, 100%);
  box-sizing: border-box;
  height: 370px;
  width: 280px;
  box-shadow: 0 0 15px rgba(0,0,0,.15);
  border-radius:10px 10px;
  transition: .3s;
  :hover {
    transform: scale(1.1);
}
`
const Image  = styled.img`
   height: 160px;
  width:100%;
  object-fit:cover;
  
  border-radius: 10px 10px 0   0  ;
`

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


const Details = styled.div`
      padding: 0 24px;
  
  h3{
    
    font-weight: 700;
    font-size: 1.25rem;
    
  }
  span{
    
    font-weight:600;
  }
  p{
    
    font-weight:100;
  }
`



export default function OneCountry(props)
{
    
    const {content} = props
    return <Container>
   
        <Link  style={linkStyle} to={`details/${content.name}`}  >
        <MiniContainer>
          <Image src={content.flags.svg}  alt={content.name}/> 
          <Details>
         <h3>{content.name}</h3>
         
         <p>    <span>population</span> :            {content.population}</p>
         <p>    <span>region</span> :          {content.region}</p>
         <p>    <span>capital</span> :          {content.capital}</p>
         </Details>
       </MiniContainer>
  </Link>
  
  </Container>
}