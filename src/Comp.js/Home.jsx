import people from  "../data.json"
import OneCountry from "./OneCountry"
import Search from "./Search"
import Select from "./Select"
import styled from "styled-components"
import { useState } from "react"



const Container = styled.div`
  display:flex;
  flex-direction:column;
`
const MiniContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(4, 350px);
    justify-content:center;
    @media (max-width: 821px) {
    display:grid;
    grid-template-columns:repeat(1,1fr);
    justify-content:center;
    justify-items: center;
    padding:20px;
    margin-bottom:20px;
  }
`

const SearchAndSelcet = styled.div`
display:flex;
flex-flow:row;
  
    background: transparent;
    height: auto;
    
    padding: 49px 0 47px;
    align-items:center;
    justify-content:space-evenly;
    width: 100%;
 
  @media (max-width: 812px) {
    display:flex;
    flex-direction:column;
    height: auto;
    align-items:center;
    justify-content:center;
    gap:70px;
    width:100%;
    
    /* grid-template-columns:repeat(1,1fr); */
  }
`

export default function Flag()

{
     const [search,setSearch] = useState(people)

  
function filterfromrealData (event)
{

  if(event === "All"){
    return setSearch(people.filter(reg=>reg.region.includes(""))) 
  }
  return  setSearch(people.filter(reg=>reg.region.includes(event))) 
}  

function searchfun(query)
{
return setSearch(  people.filter(people=>people.name.toLowerCase().includes(query)))  
}

    return ( 
      <>
     


    <Container >  
    <SearchAndSelcet>       
      <Search onChange={(e)=>searchfun(e.target.value.toLowerCase())}/> 
        <Select   onSelectFilter={filterfromrealData} ></Select>
      </SearchAndSelcet>
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