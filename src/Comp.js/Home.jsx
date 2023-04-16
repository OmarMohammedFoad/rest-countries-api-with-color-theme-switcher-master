import people from  "../data.json"
import OneCountry from "./OneCountry"
import Search from "./Search"
import Select from "./Select"
import styled from "styled-components"
import { useState } from "react"



const Container = styled.div`
  display:flex;
  flex-flow:column;
`
const MiniContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 5fr);

`

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
      
       <Select   onSelectFilter={filterfromrealData} ></Select>
      {/* <Search onChange={(e)=>searchfun(e.target.value.toLowerCase())}/>  */}
      

    <Container >  
      <MiniContainer>
      {
          search.map(data=>
          
             <OneCountry  content={data}/>
         )
      }
   
  </MiniContainer>
</Container>
</>
    )
}