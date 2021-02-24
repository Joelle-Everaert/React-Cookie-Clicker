import ReactDom from 'react-dom'
import React from 'react'


import { NavBar } from './components/navbar.jsx'
// import { Display } from './components/display.jsx'
import { Cookie } from './components/cookie.jsx'
// import Cookie from './components/cookie.jsx' -> si dans cookie.jsx export default bas de page


function Application(){
    return(
    <div className="page">
        <NavBar />
        <Cookie />
    </div>
    )
}


ReactDom.render(
    <Application />,
    document.getElementById('app')
)


