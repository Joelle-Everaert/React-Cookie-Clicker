import ReactDom from 'react-dom'
import React from 'react'


import { NavBar } from './components/navbar.jsx'
import { Cookies } from './components/cookies.jsx'


function Application(){
    return(
    <div>
        <NavBar />
        <h1> Bonjour </h1>
        <Cookies />
    </div>
    )
}


ReactDom.render(
    <Application />,
    document.getElementById('app')
)


