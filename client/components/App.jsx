import React from 'react'

import Organ from './Organ'

import {getOrgans, getOrganId} from '../api/index'



let theLocations = [
  {
    top: 4,
    left: 44
  },
  {
    top: 25,
    left: 45
  },
  {
    top: 37,
    left: 40
  },
  {
    top: 46,
    left: 45
  },
  {
    top: 36,
    left: 50
  }
]

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      organs : []
    }
  }

  componentDidMount(){
    getOrgans().then( (data)=> {

      data = data.map( (organ)=> {
        organ.desc = organ.description;
        organ.img = organ.imageUrl;
        return organ
      })
      this.setState({
        organs: data
      })
    })
  }
  

    render(){

      let stuff = this.state.organs.map((organ,i) => {

        console.log("i is ",organ)

        return (<Organ key={i} location={theLocations[i]} details={organ}/>)
      })

      return (
        <div className="mainContainer">
          <div className="personBody">
            <img className="personOutline" src="/images/personOutline.jpg"></img>
            {stuff}
          </div>
        </div>
      )
    }

}

export default App

