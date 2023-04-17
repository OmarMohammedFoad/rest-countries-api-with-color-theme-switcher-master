import styled from "styled-components"
const Fieldset = styled.fieldset`
  border:none;
  input{
    box-shadow: 0 0 15px rgba(0,0,0,.15);
    padding:10px;
    margin-left:10px;
    border-radius:5px;
    border:none;
    width:300px;
    height:50px;
  }
`
export default function Search({onChange})

{
    return( 
    
<Fieldset> 
     <input type="text" placeholder="Search for the countery ..." onChange={onChange}className="field" />


</Fieldset>
    )
}