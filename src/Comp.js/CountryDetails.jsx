import countries from "../data.json"
import { Link, useParams } from "react-router-dom"
import "./country.css"
import Border from "../Comp.js/ButtonBorder"

const Country = () => {
  const param  = useParams()
  

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        {countries.filter(people=>people.name.includes(param.flagname)).map((c,indx) => {
          const {
            
              name,
              topLevelDomain,
              nativeName,
              capital,
              subregion,
              region,
              population,
              borders,
              flags,
              currencies,
              languages,
          } = c
          console.log(borders);
          return (
            <article key={indx}>
              <div className="country-inner">
                <div className="flag">
                  <img src={flags.png} alt={name} />
                </div>

                <div className="country-details">
                  <div>
                    <h2>{name}</h2>
                    <h5>
                      Native Name: <span>{nativeName}</span>
                    </h5>
                    <h5>
                      Population: <span>{population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>{" "}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h5>
                    <h5>
                      Currencies: <span>{currencies[0].name}</span>
                    </h5>
                    <h5>
                      Languages: <span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>
              </div>

                <div >
                  <div className="borders">
                  <h3>Border Countries: </h3>
                     {borders.map((border) => {
                       return (
                         <ul key={border}>
                         <Border className="btn btn-light" border={border}/>
                          

                        </ul>
                      )
                    })} 
                  </div>
                </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Country