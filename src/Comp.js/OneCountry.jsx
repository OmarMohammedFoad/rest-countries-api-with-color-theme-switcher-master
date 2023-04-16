import {Link} from "react-router-dom"
import styled from "styled-components";


const Container = styled.div`
  display:flex;
  flex-flow:column;
  margin:20px;
  border:5px  ;
  box-shadow: 2px ;

    
`


const Img = styled.img`
      width: 245px;
    height: 161px;
`
const Details = styled.div`
  display:flex;
  flex-direction: column;
  color:black;
  background-color: hsl(0, 0%, 100%);
  width: 245px;
    height: 161px;
`

const Des = styled.div`
  display:flex;
  flex-direction:row;
  /* grid-template-columns:repeat(1,1fr); */
  
  /* padding-left:1px; */
  font-size:15px; 
  margin-bottom:60px;

  
  h5{
    font-size:20px;
    font-weight: bold;
  }
`
const linkStyle = {
 
  textDecoration: "none",
  color: 'black'
};


export default function OneCountry(props)
{
    
    const {content} = props
    return <Container>
   
      {/* <div className=""> */}
    <Img src={content.flags.svg}  alt={content.name}/>
     <Details>
      <Link  style={linkStyle} to={`details/${content.name}`}  >
        <Des>
    <h5>{content.name}</h5>
    <p>    <span>population</span> :            {content.population}</p>
    <p>    <span>region</span> :          {content.region}</p>
    <p>    <span>capital</span> :          {content.capital}</p>
    </Des>
  </Link>
  </Details>
  {/* </div> */}
  
  </Container>
}