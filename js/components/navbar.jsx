import React from 'react'

export function NavBar(){
    return(
        <nav className="navBar">
            <div>React Cookies Cliker</div>
            <img src="./img/logoTest.jpg" alt="logo" srcset=""/>
            <div>By Joelle Everaert</div>
        </nav>
    )
}

// import logo from './img/logoTest.jpg' 

// export class NavBar extends Component { 
//     render() { 
//         return ( 
//             <nav className="navBar">
//             <div>React Cookies Cliker</div>
//             <img src={logo} alt={"logo"}/> 
//             <div>By Joelle Everaert</div>
//         </nav>
//         )  
//     }
// }