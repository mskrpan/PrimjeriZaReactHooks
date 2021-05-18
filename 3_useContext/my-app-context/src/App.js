import React, {useState} from 'react';
import FunctionComponent from './components/FunctionComponent';

//kreiranje contexta
export const ThemeContext = React.createContext();

function App() {

  const[darkTheme, setDarkTheme] = useState(true);

  const toogleTheme = ()=>{
    //prebacuje darkTheme s true na false zbog !
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }


  return (
    <>
    {/* Obavijamo svu djecu s ThemeContext.Provider i dajemo im props koji mogu svi koristit*/}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toggle</button>
        <FunctionComponent/>
      </ThemeContext.Provider>
    </>
  );
}

export default App;