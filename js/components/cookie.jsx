import React from 'react'
import AddCookie from './addCookie'
import Bonus from './bonus'

export class Cookie extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
    levels :
    [
        {id: 0, name:"level1", price:30, func:this.level1, class:"level level1", pc:2},
        {id: 1, name:"level2", price:100, func:this.level2, class:"level level2", pc:15},
        {id: 2, name:"level3", price:500, func:this.level3, class:"level level3", pc:20}
    ],
            valeurClick: 1,
            clicks : 10000,
            pcPerSecond: 0,
            inflation : 1.15,
        };
    }

     //FONCTION POUR TOUT REGROUPER MAIS SANS SUCCES
    //  upgrade = id => {
    //     this.setState({
    //         clicks: this.state.clicks -= this.state.levels[id].price,
    //         valeurClick: this.state.valeurClick += this.state.levels[id].pc,
    //         prixLevel : this.state.levels[id].price = Math.floor(this.state.levels[id].price * this.state.inflation),
    //     })   
    // }

    clicked = () => {
        this.setState({
            clicks: this.state.clicks + this.state.valeurClick
        })
    }

    level1 = () => {
        this.setState({
            clicks: this.state.clicks -= this.state.levels[0].price,
            valeurClick: this.state.valeurClick += this.state.levels[0].pc,
            prixLevel: this.state.levels[0].price = Math.round(this.state.levels[0].price * this.state.inflation)
        })
    }

    level2= () => {
        this.setState({
            clicks: this.state.clicks -= this.state.levels[1].price,
            valeurClick: this.state.valeurClick += this.state.levels[1].pc,
            prixLevel: this.state.levels[1].price = Math.round(this.state.levels[1].price * this.state.inflation)
        })
    }

    level3 =() => {
        this.setState({
            clicks: this.state.clicks -= this.state.levels[2].price,
            pcPerSecond: this.state.pcPerSecond += this.state.levels[2].pc,
            prixLevel: this.state.levels[2].price = Math.round(this.state.levels[2].price * this.state.inflation)
        })  
    }
    
    masterInterval = setInterval(() => {             
    this.setState((state) => {
        console.log("oups");
         return {
            clicks: this.state.clicks += this.state.pcPerSecond
        };
          });
      }, 1000);


    render(){

        const listCookieLevel = this.state.levels.map((level)=>(
            <AddCookie 
                upgrade={level.func} 
                clicker={this.state.clicks}
                level={level.price}
                class={level.class}
            />
        ))
        return (
            <div className="display">
                <div className="shop shoptitle">SHOP
                {/* <div className="box"> */}

                <div className="box">
                    {listCookieLevel}
                </div>
                {/* </div> */}
            </div>

            <div className="totalCookies">
            <button onClick={this.clicked} className="cookie"><strong>Click on me</strong></button>
            </div>
            <div className="displayCookie"> <p className="number">Number of cookies </p> <div className="result"> {this.state.clicks}</div>
            <Bonus 
            clicker={this.state.clicks}
            />
            </div>

        </div>
        )
    }
        
}
