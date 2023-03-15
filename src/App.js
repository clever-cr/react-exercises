import React from 'react'
import Animal from "./components/Animal"
const App = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <div>
      <Animal list={animals} />
    </div>
  )
}

export default App