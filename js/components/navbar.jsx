import React from 'react'
import img from './img/logoTest.jpg';

export function NavBar(){
    return(
        <nav className="navBar">
            <div>React Cookies Cliker</div>
            <a href =""> <img  id="logo" src={img} alt="logo" /></a> 
            <div>By Joelle Everaert</div>
        </nav>
    )
}
