import OneCountry from "./OneCountry";
import "./CountryDetails.css"
import people from "../data.json"
import { useParams ,Link} from "react-router-dom";

import ButtonBorder from "./ButtonBorder";



export default function CountryDetails()
{
   
const param =useParams()

    return <>
    {
      people.filter(people=>people.name.includes(param.flagname)).map(data=>
    
    <section key={data.id} className="section about-section gray-bg" id="about">
        <div className="container">
            
    <div className="row align-items-center justify-content-around flex-row-reverse">
        <div className="col-lg-6">
            <div className="about-text1">
            <h3 className="dark-color">{data.name}</h3>
            <p className="theme-color"><span className="nothing">Nativename</span> : {data.nativeName}</p>
            <p><span className="nothing">Population</span> : {data.population}</p>
            <p><span className="nothing">Region</span> : {data.region}</p>
            <p><span className="nothing">Sub region</span> : {data.subregion}</p>
            <p><span className="nothing">Capital</span> : {data.capital}</p>
            <div className="btn-bar"> 
           
             </div>
             </div>
             <div className="second-div">
            <div className="about-text">
            <h3 className="dark-color"></h3>
            <p className="theme-color"> <span className="nothing">Top level domain</span> : {data.topLevelDomain}</p>
            <p> <span className="nothing">Currencies</span> : {data.currencies[0].name}</p>
            <span className="nothing"> Languages</span> :
            
            {data.languages.map(lan=>
                  <div>
                   { 
                   <p>
                        {lan.nativeName}
                    </p>}
                  </div>
                  )}
                  

                 
                  <span className="nothing">Border : </span>
                {data.borders=== undefined ?
                
                  <h1>
                    
                  </h1>

                  :
                    
                  
                  data.borders.map(border=>
                    
                    <div className="flex-container">
                        
                        
                        
                        <ButtonBorder  className="bordercountry"  border={border}/>
                    </div>
                    )}
                   
 
           
            <div className="btn-bar"> 
           
             </div>
             </div>
             </div>
            </div>
            
            <div className="col-lg-5 text-center">
            <Link  to={"/"} className="back">back</Link>
                <div className="about-img"> 
                <img src={data.flag} alt={data.name} className="imgdetails" />
                </div>
                </div>
                </div>
                </div> 
                </section>
      )} 
    </>
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