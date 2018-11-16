import React from 'react'

import Organ from './Organ'

import {getOrgans, getOrganId} from '../api/index'



let theLocations = [
  {
    top: 4,
    left: 46
  },
  {
    top: 25,
    left: 47
  },
  {
    top: 37,
    left: 44
  },
  {
    top: 46,
    left: 48
  },
  {
    top: 36,
    left: 51
  }
]

class App extends React.Component{
  constructor(props){
    super(props)


    if (props.testData){
      this.state = {
        organs : props.testData,
        spin: false
      }
    }
    else{
      this.state = {
        organs : [],
        spin: false
      }
    }

    this.clickHandle = this.clickHandle.bind(this)
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
      .catch( (err)=>{
        console.log("Got an err of ",err);
      })
    })
  }

  clickHandle(){
    this.setState({
      spin: !this.state.spin
    })
  }
  

    render(){

      let stuff = this.state.organs.map((organ,i) => {

        return (<Organ key={i} location={theLocations[i]} details={organ}/>)
      })

      let mainContainerClass = "mainContainer"
      if(this.state.spin){
        mainContainerClass += " spinning"
      }

      return (

        <React.Fragment>
        <div className="headerSection">
          <img onClick={this.clickHandle} src="/images/logo.png" alt="logo"/>
        </div>
        <div className={mainContainerClass}>
          <div className="personBody">
            <img className="personOutline" src="/images/personOutline.jpg"></img>
            {stuff}
          </div>
        </div>
        </React.Fragment>
      )
    }

}

export default App

