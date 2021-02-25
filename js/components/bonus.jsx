import React, { Component } from 'react'

class Bonus extends Component{
    render(){
        return(
            
            <div className="bonus">
                {this.props.clicker >= 2000 ?
                <div className="bonusImg"> 2000 cookies</div>
                :
                <p></p>
                }
                {this.props.clicker >= 10000 ?
                <div className="bonusImg2"> 10000 cookies</div>
                :
                <p></p>
                }

            </div>
        )
    }
}

export default Bonus