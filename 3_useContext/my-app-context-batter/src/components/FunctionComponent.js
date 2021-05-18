import React from 'react'
//ovo više ne koristimo nego iz ThemeContext uzimamo custom napravljene funkcije
//import { ThemeContext } from '../App'
import {useTheme, useThemeUpdate} from './ThemeContext.js';

export default function FunctionComponent() {
    //ne koristimo više ovo
    //const darkTheme = useContext(ThemeContext)
    //ovo je sad novo umjesto ovog iznad
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyle = {
        //gleda da li je state 'darkTheme' iz ThemeContext.js true ili false
        backgroundColor: darkTheme ? '#333' : "#ccc",
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
        <button onClick={toggleTheme}>Toggle</button>
        {/*dajemo taj stil*/}
        <div style={themeStyle}>FunctionComponent</div>
        </>
    )
}