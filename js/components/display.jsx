import React from 'react'


export function Display(props){
    return(
        <div className="display">
        <div className="shop">
            SHOP
        </div>
        <div className="divCookie">{props.children}</div>
        <div className="displayCookie"> Number of cookies</div>
        </div>
    )
}