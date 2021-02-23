import ReactDom from 'react-dom'
import React from 'react'


import { NavBar } from './components/navbar.jsx'

function Application(){
    return(
    <div>
        <NavBar />
        <h1> Bonjour </h1>
    </div>
    )
}

ReactDom.render(
    <Application />,
    document.getElementById('app')
)


