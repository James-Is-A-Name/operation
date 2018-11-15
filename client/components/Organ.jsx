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

    if(props.name == undefined){
      props.name = "Barry"
    }

    this.state = {
      showEntry: false,
      name: props.name
    }

    this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle(e){

    this.setState({
      showEntry: !this.state.showEntry
    })
  }

  render (){
    let theElement;// = ( <div><h1>Stuff</h1></div> );
    if(this.state.showEntry){
      theElement = (
        <div style={divStyleShow} onClick={this.clickHandle}>
          <h2>This is the {this.state.name}</h2>
        </div>
      )
    }
    else{
      theElement = (
        <div style={divStyleHide} onClick={this.clickHandle}>
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

