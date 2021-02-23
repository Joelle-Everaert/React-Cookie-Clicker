import React from 'react'

// export function Cookie(){
//     return(
//         <button className="cookie">
//             <strong>Click on me</strong>
//         </button>
//     )
// }

class Cookie extends React.Component{
    constructor(props){
        super(props);
        this.state = { clicks : 0 };
    }

    clicked = () => {
        this.setState({
            clicks: this.state.clicks +1
        })
    }

    render(){
        return (
            <div className="totalCookies">
            <button onClick={this.clicked} className="cookie"><strong>Click on me</strong></button>
            Total cookies : {this.state.clicks}
            </div>
        )
    }
        
}

export default Cookie
// onclick!!!