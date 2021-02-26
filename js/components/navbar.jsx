import React from 'react'
import img from './img/logoTest.jpg';

export function NavBar(){
    return(
        <nav className="navBar">
            <div>React Cookies Cliker</div>
            <a href =""> <img  id="logo" src={img} alt="logo" /></a> 
            <div>By <a className="link" href="https://github.com/Joelle-Everaert" target="_blank">/ Joelle Everaert \ </a></div>
        </nav>
    )
}
