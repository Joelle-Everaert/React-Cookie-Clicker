import React, { Component } from 'react'

class AddCookie extends Component{
    
    render(){
        return(        
            <div>
              {this.props.clicker >= this.props.level ?
                <div>
                    <div className="level" id="level1" onClick={()=>this.props.upgrade()}></div>
                    <div className="price">{this.props.price} cookies </div>
                </div>
                    :
                    <p></p>
                }
            </div>

        )
        
    }
}

export default AddCookie

