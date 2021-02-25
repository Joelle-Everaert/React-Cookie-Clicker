import ReactDom from 'react-dom'
import React from 'react'


import { NavBar } from './components/navbar.jsx'
import Cookie  from './components/cookie.jsx'
// import Cookie from './components/cookie.jsx' -> si dans cookie.jsx export default bas de page
import { Footer } from './components/footer.jsx'

function Application(){
    return(
    <div>
        <NavBar />
        <Cookie />
        <Footer />
    </div>
    )
}


ReactDom.render(
    <Application />,
    document.getElementById('app')
)


