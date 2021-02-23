import React from 'react'



export class Cookie extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            level1: 10,
            level2: 20,
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
            clicks: this.state.clicks -= this.state.level1,
            puissanceClick: this.state.puissanceClick += 2,
            level1: this.state.level1 += 20
        })
    }

    level2= () => {
        this.setState({
            clicks: this.state.clicks -= this.state.level2,
            puissanceClick: this.state.puissanceClick += 10,
            level2: this.state.level2 += 30
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
                {this.state.clicks >= this.state.level1 ?
                <div>
                    <button onClick={this.level1}>+ 2 cookies</button>
                </div>
                    :
                    <p></p>
                }
                {this.state.clicks >= this.state.level2 ?
                <div>
                    <button onClick={this.level2}>+ 10 cookies</button>
                </div>
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