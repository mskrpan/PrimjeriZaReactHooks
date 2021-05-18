import React from 'react';
import FunctionComponent from './components/FunctionComponent';

//ovo je sad novo umjesto ThemeContext.Provider na liniji 26
import {ThemeProvider} from './components/ThemeContext.js';

//kreiranje contexta više ne trebamo vamo
//export const ThemeContext = React.createContext();

function App() {
  //state više ne trebamo vamo
  //const[darkTheme, setDarkTheme] = useState(true);

  //toggle button više ne trabamo
  /*const toogleTheme = ()=>{
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }*/


  return (
    <>
    {/* Više ovako ne idemo nego s ThemeProvider kojeg smo importali,
    također netrebamo value jer je on u ThemeProvideru,
    također ne trebamo button jer je i on u ThemeProvideru

      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toggle</button>
        <FunctionComponent/>
      </ThemeContext.Provider> */}

      <ThemeProvider>
        <FunctionComponent/>
      </ThemeProvider>
    </>
  );
}

export default App;