import React, {useState} from "react"

function App() {
  const [state, setState] = useState({count: 0, theme: "blue"});
  const count = state.count;
  const theme = state.theme;

  const decrementCount = ()=>{
    setState(preState => {
      //... predstavlja da spremi sva prijašnja stanja state u preState i doda promjenu samo na count
      return {...preState, count: preState.count - 1}

      //kad bi return bio ovakav kompletno bi se theme izgubio jer bi izbrisao cijeli state i u njega upisao samo count
      //return {count: preState.count - 1}

      /* Zbog ovog problema pametno je nekad imat više state-ova kako bi ih razbili u komponente
      Na što se misli pod tim, pa ovo:
      const [count, setCount] = useState(0);
      const [theme, setTheme] = useState('blue');

      umjesto:
      const [state, setState] = useState({count: 0, theme: "blue"});
      */
    })
  }

  const incrementCount = ()=>{
    setState(preState => {
      return {...preState, count: preState.count + 1}
    })
  }


  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
