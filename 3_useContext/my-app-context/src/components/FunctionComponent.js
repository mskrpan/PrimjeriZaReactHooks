import React, {useContext} from 'react'
import { ThemeContext } from '../App'

export default function FunctionComponent() {
    //s useContext koristimo kreirani context i njegov prosljeđeni props iz ThemeContext
    const darkTheme = useContext(ThemeContext)
    const themeStyle = {
        //gleda da li je state 'darkTheme' iz App.js true ili false
        backgroundColor: darkTheme ? '#333' : "#ccc",
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
        {/*dajemo taj stil*/}
        <div style={themeStyle}>FunctionComponent</div>
        </>
    )
}