import React, { Component } from 'react'

export default class LiveView extends Component {
    
  render() {
    return (
      <div className='liveView container d-flex justify-content-evenly px-5 mb-5'>
        <div className='position-relative'>
            <img src='./glassesImage/model.jpg' alt="liveImage" width={300}/>
            <img className='glass' src={this.props.glass.url} alt=""/>
            <div className='infor'>
                <p className='name'>{this.props.glass.name}</p>
                <p className='desc'>{this.props.glass.desc}</p>
            </div>
        </div>
        <div className=''>
            <img src='./glassesImage/model.jpg' alt="liveImage" width={300}/>
        </div>
      </div>
    )
  }
}
