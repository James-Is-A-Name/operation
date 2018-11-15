import React from 'react'

import Organ from './Organ'


let theBrain = {
  name:"Brain",
  desc: "The brain is a squishy thing with strange lumps",
  img: "/images/Nothing.png"
}

let theLungs = {
  name:"Lungs",
  desc: "A big'ol bag o air",
  img: "/images/Nothing.png"
}

let theStomach = {
  name:"Stomach",
  desc: "FEEEEEED MEEEEEEEEE",
  img: "/images/Nothing.png"
}


let local1 = {
  top: 10,
  left: 10
}
let local2 = {
  top: 30,
  left: 10
}
let local3 = {
  top: 50,
  left: 20
}

const App = () => {
  return (
    <div className="mainContainer">
      <div className="personBody">
        <Organ location={local1} details={theBrain}/>
        <Organ location={local2} details={theLungs}/>
        <Organ location={local3} details={theStomach}/>
      </div>
    </div>
  )
}

export default App

