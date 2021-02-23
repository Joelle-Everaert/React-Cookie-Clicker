import ReactDom from 'react-dom'
import React from 'react'


import { NavBar } from './components/navbar.jsx'
import { Display } from './components/display.jsx'
import Cookie from './components/cookie.jsx'


function Application(){
    return(
    <div>
        <NavBar />
        <Display> <Cookie /> </Display>
    </div>
    )
}


ReactDom.render(
    <Application />,
    document.getElementById('app')
)


