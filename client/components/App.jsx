import React from 'react'

import Organ from './Organ'

const App = () => {
  return (
    <div>
      <h1>React development has begun!</h1>
      <Organ name="brain"/>
      <Organ name="stomach"/>
      <Organ name="lungs"/>
    </div>
  )
}

export default App

