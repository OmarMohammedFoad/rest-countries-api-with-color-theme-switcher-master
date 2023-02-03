
import Flag from './Comp.js/Home';
import Header from './Comp.js/Header';
import { useState,useEffect } from 'react';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import CountryDetails from './Comp.js/CountryDetails';

// import "./darkmood.css"


function App() {
  const [theme,setTheme] = useState("light")
  
  
  useEffect(()=>
  {
   document.body.className = theme
  },[theme])
  
  function toggle( )
  {
    if(theme==="light")
    {
      setTheme("dark")
    }
    else if(theme=== "dark")
    {
      setTheme("light")
    }
  }  
  return (
    <>
      <div className={`app ${theme}`}>
    
      <BrowserRouter>
      <Header Toggle={toggle}/> 
      <Routes>
     
      <Route path='details/:flagname' element={<><CountryDetails/></>}/>
      
  <Route  path="/" element={<> <Flag /></>}  />
    </Routes>
    </BrowserRouter>
   
    </div>
    </>
    
  );
}

export default App;
