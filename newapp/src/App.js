import './App.css';
import Navbar from './component/navbar';
import Container from './component/container';
import Accordian from './component/dark-mode';
import React, { useState } from 'react';

function App() {
  const [pageMode,setPage]=useState("Light");
  function toggleMode()
  {
    if(pageMode==='Light')
    {
      setPage('Dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else
    {
      setPage('Light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }

  return (
    // used for single parent or use a div or React.fragment tag
    <> 
      <Navbar title="Textutils" search="Search" pageMode={pageMode} toggleMode={toggleMode}/>
      <div className="my-30">
      <Container/>
      </div>
      <Accordian/>
    </>
  );
}

export default App;
