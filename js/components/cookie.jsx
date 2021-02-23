import React from 'react'



export class Cookie extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            puissanceClick: 1,
            clicks : 0
        };
    }

    clicked = () => {
        this.setState({
            clicks: this.state.clicks + this.state.puissanceClick
        })
    }

    level1 = () => {
        this.setState({
            clicks: this.state.puissanceClick += 2,
            clicks: this.state.clicks -= 10
        })
    }

    level2= () => {
        this.setState({
            clicks: this.state.puissanceClick += 10,
            clicks: this.state.clicks -=30
        })
    }

    // grandMaLevel =() =>
    // this.setState({
    // INTERVAL 
    // })


    render(){
        return (
            <div className="display">
                <div className="shop">SHOP
                {this.state.clicks > 10 ?
                    <div onClick={this.level1}>+ 2 cookies</div>
                    :
                    <p></p>
                }
                {this.state.clicks > 100 ?
                    <div onClick={this.level2}>+ 10 cookies</div>
                    :
                    <p></p>
                }
                </div>

            <div className="totalCookies">
            <button onClick={this.clicked} className="cookie"><strong>Click on me</strong></button>
            </div>
            <div className="displayCookie"> Number of cookies : {this.state.clicks}
            
            </div>
            </div>
        )
    }
        
}

// export default Cookie

// onclick!!!