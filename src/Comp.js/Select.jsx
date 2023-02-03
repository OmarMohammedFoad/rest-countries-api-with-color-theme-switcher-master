    import "./Select.css"
export default function Select(props)
{
    function filterRegionSeleceted(event)
    {   
        console.log(event.target.value);
        
       
        props.onSelectFilter(event.target.value)
    }
    
    return(<>
    <div className="Selecet1" >
 <select  className="options" onChange={filterRegionSeleceted}>
  <option>filter by region</option>
  <option value="">All</option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>
</div>
    </>)
}