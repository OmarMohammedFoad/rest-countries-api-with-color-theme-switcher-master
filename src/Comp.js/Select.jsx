import styled from "styled-components"
const SelectDiv = styled.select`
    height:50px;
    width:150px;
    margin-right:10rem;
    border-radius:5px;
    border:none;
    box-shadow: 0 0 15px rgba(0,0,0,.15);
    

    
    
`
export default function Select(props)
{
    function filterRegionSeleceted(event)
    {   
        
        
       
        props.onSelectFilter(event.target.value)
    }
    
    return(<>
   
 <SelectDiv  onChange={filterRegionSeleceted}>

  <option value="All">All</option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>

</SelectDiv>
    </>)
}