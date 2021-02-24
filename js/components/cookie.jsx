import React from 'react'
import AddCookie from './addCookie'

export class Cookie extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            level1: 10,
            level2: 20,
            level3: 700,
            puissanceGrandMa: 10,
            valeurClick: 1000,
            clicks : 0
        };
    }

    clicked = () => {
        this.setState({
            clicks: this.state.clicks + this.state.valeurClick
        })
    }

    level1 = () => {
        this.setState({
            clicks: this.state.clicks -= this.state.level1,
            valeurClick: this.state.valeurClick += 2,
            level1: this.state.level1 += 20
        })
    }

    level2= () => {
        this.setState({
            clicks: this.state.clicks -= this.state.level2,
            valeurClick: this.state.valeurClick += 10,
            level2: this.state.level2 += 30
        })
    }

    level3 =() => {
        this.setState({
            clicks: this.state.clicks -= this.state.level3,
            // puissanceGrandMa: this.state.puissanceGrandMa += 10,
            level3: this.state.level3 += 2000,

        })

        clearInterval(intervalLevel3)

        const intervalLevel3 = setInterval(() => {
            this.setState({
                clicks: this.state.clicks += this.state.puissanceGrandMa,
            })
        }, 1000);

       
    }

    render(){
        return (
            <div className="display">
                <div className="shop">SHOP
                <div className="box">
                {this.state.clicks >= this.state.level1 ?
                <div>
                    <div className="level" id="level1" onClick={this.level1}></div> <div className="price">{this.state.level1} cookies </div>
                </div>
                    :
                    <p></p>
                }
                {this.state.clicks >= this.state.level2 ?
                <div>
                    <div className="level" id="level2" onClick={this.level2}></div><div className="price">{this.state.level2} cookies </div>
                </div>
                    :
                    <p></p>
                }
                {this.state.clicks >= this.state.level3 ?
                <div>
                    <div className="level" id="level3" onClick={this.level3}></div><div className="price">{this.state.level3} cookies </div>
                </div>
                    :
                    <p></p>
                }
                </div>
            </div>

            <div className="totalCookies">
            <button onClick={this.clicked} className="cookie"><strong>Click on me</strong></button>
            </div>
            <div className="displayCookie"> Number of cookies : <div> {this.state.clicks}</div>
            </div>

        </div>
        )
    }
        
}

// export default Cookie

// onclick!!!