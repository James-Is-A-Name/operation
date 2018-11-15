import React from 'react'


let divStyleHide = {
  width: "100px",
  height: "100px",
  border: "solid 1px",
}
let divStyleShow = {
  width: "500px",
  height: "100px",
  border: "solid 4px",
}

class Organ extends React.Component{
  constructor(props){
    super(props)

    let organ = props.details
    let place = props.location

    if(organ == undefined){
      organ.name = "Barry"
      organ.img = "Barry"
      organ.desc = "Barry"
    }
    
    this.state = {
      showEntry: false,
      name: organ.name,
      img: organ.img,
      desc: organ.desc,
      top: place.top,
      left: place.left
    }

    this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle(e){

    this.setState({
      showEntry: !this.state.showEntry
    })
  }

  render (){


    let positionShow = {
      top: `${this.state.top}%`,
      left: `${this.state.left}%`,
      zIndex: 999
    }
    let positionHide = {
      top: `${this.state.top}%`,
      left: `${this.state.left}%`,
      zIndex: 1
    }


    let theElement;
    if(this.state.showEntry){
      theElement = (
        // <div style={divStyleShow} onClick={this.clickHandle}>
        <div style={positionShow} className="organShow" onClick={this.clickHandle}>
          <img className="organDetailsImage" src={this.state.img} alt={this.state.name}/>
          <div className="organDetailsInfo">
            <h2 className="organDetailsText">{this.state.name}</h2>
            <p>{this.state.desc}</p>
          </div>
        </div>
      )
    }
    else{
      theElement = (
        // <div style={divStyleHide} onClick={this.clickHandle}>
        <div style={positionHide} className="organHide" onClick={this.clickHandle}>
          <img style={{widht:"98%", height:"98%"}} src={this.state.img} alt={this.state.name}/>
        </div>
      )
    }

    return (
      <React.Fragment>
        {theElement}
      </React.Fragment>
    )
  }
}

export default Organ

