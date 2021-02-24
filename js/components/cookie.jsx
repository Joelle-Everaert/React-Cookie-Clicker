import React from 'react'



export class Cookie extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            level1: 10,
            level2: 20,
            grandMaLevel: 700,
            puissanceGrandMa: 10,
            valeurClick: 1,
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

    grandMaLevel =() => {
        this.setState({
            clicks: this.state.clicks -= this.state.grandMaLevel,
            // puissanceGrandMa: this.state.puissanceGrandMa += 10,
            grandMaLevel: this.state.grandMaLevel += 2000,

        })

        clearInterval(intervalGrandMa)

        const intervalGrandMa = setInterval(() => {
            this.setState({
                clicks: this.state.clicks += this.state.puissanceGrandMa,
            })
        }, 1000);

       
    }

    render(){
        return (
            <div className="display">
                <div className="shop">SHOP
                {this.state.clicks >= this.state.level1 ?
                <div>
                    <div className="imgLevel1" onClick={this.level1}><p className="level1">{this.state.level1} cookies </p> </div>
                </div>
                    :
                    <p></p>
                }
                {this.state.clicks >= this.state.level2 ?
                <div>
                    <div className="imgLevel2" onClick={this.level2}><p className="level2">{this.state.level2} cookies </p></div>
                </div>
                    :
                    <p></p>
                }
                {this.state.clicks >= this.state.grandMaLevel ?
                <div>
                    <div className="imgLevel3" onClick={this.grandMaLevel}><p className="level3">{this.state.grandMaLevel} cookies </p></div>
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