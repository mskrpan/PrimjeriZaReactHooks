import "./App.css";
import React, { useState, useReducer } from "react";

//kako bi lakše bilo pisat umjesto da stalno upisujemo string
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

//reducer koji kad primi odredjenu akciju obavlja određeni case i uvijek je poželjno imat default koji vraća trenutni state
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  //kreiranje useReducer state i on će u 99,99 posto slučajeva biti minimalno objekt npr "{count: 0}"
  //dispatch je funkcija koja nam mjenja state preko reducera u ovisnosti što joj dajemo što se vidi na liniji 28/29
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    //dajemo preko dipatcha type: "increment" koji smo gore definirali na liniji 5/6/7 i u ovisnosti o tome se odradi reducer gore na liniji 11
    dispatch({ type: ACTIONS.INCREMENT }); //NOTE: ne mora biti ništa ali onda će se odradit default ali u praksi je da kad se radi s reducerom imaju se case-ovi ili if-ovi pa je minimalno type
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
