import React, { Component } from 'react'
import ListGlassBox from './ListGlassBox'
import { dataGlass } from '../../data/DataGlass'
import LiveView from './LiveView'

export default class ChooseGlassBox extends Component {
    state  = {
        glass:{
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            name: "PRADA P9700",
            url: "./glassesImage/v6.png"  
        }
    }
    
  render() {
    return (
            <div className="content mx-5 px-5">
                <LiveView glass={this.state.glass} />
                <ListGlassBox dataGlass={dataGlass} changeGlassInfor={this.changeGlassInfor}/>
        </div>
    )
  }
  changeGlassInfor=(glass)=>{
    this.setState({
        glass:glass
    })
    console.log('state',this.state);
}
}
