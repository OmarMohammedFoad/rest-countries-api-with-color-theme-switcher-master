import people from  "../data.json"
import OneCountry from "./OneCountry"
import Search from "./Search"
import Select from "./Select"


import { useState } from "react"

export default function Flag()

{
     const [search,setSearch] = useState([])

  
function filterfromrealData (event)
{
  return  setSearch(people.filter(reg=>reg.region.includes(event))) 
}  

function searchfun(query)
{
return setSearch(  people.filter(people=>people.name.toLowerCase().includes(query)))  
}

    return ( 
      <>
      <br/>
      
      <Select   onSelectFilter={filterfromrealData} />
      
      <Search onChange={(e)=>searchfun(e.target.value.toLowerCase())}/>
      

    <div className="Container">  
      <div className="row">
      {
          search.map(data=>
          <div className="col">
             <OneCountry  content={data}/>
          </div> )
      }
   
  </div>
</div>
</>
    )
}