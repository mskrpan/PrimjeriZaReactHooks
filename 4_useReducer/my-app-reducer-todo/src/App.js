import "./App.css";
import React, {useState, useReducer } from "react";
import Todo from "./components/Todo.js";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo =>{
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo;
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
        return todos;
  }
};

const newTodo = (name)=>{
  return {id: Date.now(), name: name, complete: false } //vraća objekt koji u case 13/14 ubacujemo u array od našeg todos na liniji 36
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  //funkcija koja nam omogućuje submit u formu
  const handleSubmit = (e)=>{
    e.preventDefault(); //ovo je da se spriječi po defaultu način rada u ovom slučaju da ti ne refresha stranicu od forma
    dispatch({type: ACTIONS.ADD_TODO, payload: {name:name} }) //šaljemo preko dispatcha type i payload kako bi reducer funkcija na liniji 13/14 odradila
    setName('') //vraća input na prazno
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {/*mapiramo naše todos i ispisujemo te joj preko propsa šaljemo todo i dispatch. Key je samo tu jer svaki kreirani todo treba imat id */}
      {todos.map(todo=>{
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </>
  );
}

export default App;
