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


    let position = {
      top: `${this.state.top}%`,
      left: `${this.state.left}%`
    }


    let theElement;
    if(this.state.showEntry){
      theElement = (
        // <div style={divStyleShow} onClick={this.clickHandle}>
        <div style={position} className="organShow" onClick={this.clickHandle}>
          <span className="organDetailsText">This is the {this.state.name}</span>
          <img className="organDetailsImage" src={this.state.img} alt={this.state.name}/>
        </div>
      )
    }
    else{
      theElement = (
        // <div style={divStyleHide} onClick={this.clickHandle}>
        <div style={position} className="organHide" onClick={this.clickHandle}>
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
