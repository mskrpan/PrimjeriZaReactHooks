import React from 'react'
import {ACTIONS} from '../App.js';

//ubacili smo ACTION iz App.js
//dodali smo todo i dispatch iz App.js
export default function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
            {/* Šaljemo na klik preko dispatcha type koja ACTION je izvršen i payload koji će poslat samo id u App.js*/}
            <button onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}>Toggle</button>
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}>Delete</button>
        </div>
    )
}
