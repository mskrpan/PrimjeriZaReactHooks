import React, {useState} from "react"

//primjer upisa za state
//stavit umjesto broja 0 u useState da vidiš razliku
function primjer(){
  console.log("Svaki put kad se obavi rander return se upiše u state");
  return 4;
}

function App() {

  //hook nikad ne smije biti u nekom if-u, switchu, funkciji itd. nego mora biti solo iznad return ali unutar glupe komponente
  //prvi parametar "count" u [] je state a drugi parametar je funkcija "seCount" koja mjenja taj state
  const [count, setCount] = useState(0);

  const decrementCount = ()=>{
    //1) -- 1. i 2. rade identično ako se samo jednom pozivaju
    //2)
    //2.1)-- 1. prvi setCount ako pozovemo dva puta neće se smanjit za 2 nego za 1
    //2.2)-- 2. ako postavimo ovaj seCount na 2 puta on će se smanjit za 2
    /*2.3)--savjetuje se način br.2 za koristit jer preCount je samo parametar koji u sebe po defaultu sprema count
     kao zadnje stanje (preCount je proizvoljno nazvan parametar) i onda mu preko arrow funkcije samo uzme zadnje stanje - 1 */

    //1.
    //setCount(count-1)
    //setCount(count-1)

    //2.
    setCount(preCount => preCount-1)
    //setCount(preCount => preCount-1)
  }

  const incrementCount = ()=>{
    setCount(preCount => preCount+1)
  }


  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
