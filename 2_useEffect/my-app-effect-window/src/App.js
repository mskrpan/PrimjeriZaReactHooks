import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);


  const handleResize = ()=>{
    setwindowWidth(window.innerWidth);
  }

  //ako napravimo ovako onda će se broj promjenit samo kad refreshamo stranicu nakon što smo promjenili širinu
  /*
  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, []);
  */

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return ()=>{
      window.removeEventListener('resize', handleResize);
      console.log("makni predplatu");
    }
  }, [])

  return (
    <h1>{windowWidth}</h1>
  );
}

export default App;
