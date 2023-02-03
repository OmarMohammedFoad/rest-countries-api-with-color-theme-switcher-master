import "./Search.css"

export default function Search({onChange})

{
    return <>
    
<fieldset className="field-container">
  
<link href='https://css.gg/search.css' rel='stylesheet'/>
            
  
  <div className="icons-container">
    <div className="icon-search">
    <span> <i className="gg-search"></i></span><input type="text" placeholder="Search..." onChange={onChange}className="field" />

    </div>
    <div className="icon-close">
      <div className="x-up"></div>
      <div className="x-down"></div>
    </div>
  </div>
</fieldset>
    </>
}