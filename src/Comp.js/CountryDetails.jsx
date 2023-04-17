
import people from "../data.json"
import { useParams ,Link} from "react-router-dom";
import ButtonBorder from "./ButtonBorder";
import styled  from "styled-components";


const BigDiv = styled.div`
align-items: flex-start;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    padding-top: 5rem;
    @media (max-width: 812px) {
    display:flex;
    flex-direction:column;
    /* height: auto;
    align-items:center;
    justify-content:center; */
    gap:70px;
    width:100%;
    height:100%;
    padding-bottom:20px;
    padding-left:26px;
    
    /* grid-template-columns:repeat(1,1fr); */
  }
  
`
const SecondDiv = styled.div`

    align-items: flex-start;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:start;
    @media (max-width: 812px)
    {
      display: flex;
    flex-direction: column;
    
    }

`
const ThirddDiv = styled.div`
      display: flex;
    font-weight: 600;
    margin-top: 4rem;
    margin-left: -4rem;
    width: 100%;

    ul{
          list-style-type: none;

    }
    span{
      padding: 2px;
      font-weight:normal;
    }
    h2{
      position:relative;
      bottom:40px;
      left:110px; 
    }
`
const Border = styled.div`
       display: grid;
    grid-template-columns: repeat(4, 5rem);
    margin-left:54px;
    gap: 5px;
`

const Image = styled.img`
    height: auto;
    width: 555px;
    box-shadow: 0 0 15px rgba(0,0,0,.15);
 
`
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

export default function CountryDetails()
{
   
const param =useParams()

    return(
    
      people.filter(people=>people.name.includes(param.flagname)).map(data=>
  
        <BigDiv key={data.id} >
      <Link style={Button} to={"/"} >back</Link>
                <Image src={data.flag} alt={data.name} /> 
        <SecondDiv>
          <ThirddDiv>
          <h2 >{data.name}</h2>
            <ul>
              <li>   Nativename :<span> {data.nativeName}</span></li>

              <li>Population :<span > {data.population}</span></li>

              <li> Subregion : <span>{data.subregion}</span></li>
              <li>  Region :<span> {data.region}</span></li>
          <li>Capital :<span> {data.capital}</span></li>

            </ul>
         
         <ul>
         
          <li>Top level domain :<span> {data.topLevelDomain} </span></li>
          <li>Currencies : <span>{data.currencies[0].name}</span></li>
          <li>  Languages :{data.languages.map(lan=><span>{lan.nativeName}</span>)}</li>
         </ul>
         </ThirddDiv>
            
            <Border>
                  {data.borders?<span >Border : </span>:<></>}
                {data.borders=== undefined ?<h1></h1>:data.borders.map(border=>
                <ButtonBorder border={border}/>)}
             </Border>
             </SecondDiv>

           
           
             
            
            
                    
                </BigDiv>
      )
    )
}





                {/* <div classNameName="Container">  
      <div classNameName="row">
      {
         people.filter(people=>people.name.includes(param.flagname)).map(data=>
          <div classNameName="col">
            <section classNameName="Details">
             <img src={data.flag} alt={data.name} classNameName="imgdetails" />
             </section>
             <section classNameName="otherdetails">
                <h1>{data.name}</h1>
                <h2>{data.nativeName}</h2>
                <h2>{data.alpha2Code}</h2>
                <h3>{data.currencies[0].name}</h3>
                <p>{data.topLevelDomain[0]}</p>
                {data.languages.map(lan=>
                  <div>
                   { <h1>
                        {lan.nativeName}
                    </h1>}
                  </div>
                  )}
                  <h1>{data.subregion}</h1>
                  {
                  data.borders=== undefined ?
                  <h1>
                    
                  </h1>
                  :
                  data.borders.map(border=>
                    <h1>
                        {border}
                    </h1>
                    )}
                    <h2>{data.population}</h2>
             </section>
          </div> )
      }
   
  </div>
</div> */}