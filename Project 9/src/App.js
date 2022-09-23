import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colours = new Values(color).all(5)
      console.log(colours)
      setList(colours)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }

  }
  
  return(
    <>
      <section className='container'>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"  
          className={`${error ? "error" : null}`}
           />
          <button>Submit</button>
        </form>
      </section>
      <section className='colours'>
        {list.map((color, index) => {
          console.log(color)
          return <SingleColor key={index} color={color}></SingleColor>
        })}
      </section>
    </>
  )
}

export default App
