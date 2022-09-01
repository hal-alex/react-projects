import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [paras, setParas] = useState(0)
  const [text, setText] = useState([])

  // const handleChange = (e) => {
  //   setParas(e.target.value)
  // }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setParas(value)
  }

  return (
    <>
    <h1>Random Text Generator</h1>
      <form>
        <label htmlFor="Paragraphs">Paras
          <input 
          type="number" 
          name="paras" 
          id="paras"
          placeholder="0"
          // onChange={handleChange}
           />
        </label>
        <button onClick={handleSubmit}>generate</button>
      </form>
      <div>
        {text.map((lorem, index) => {
          if (index <= paras -1) {
            return (
              <article key={index}>
                <h5>{lorem}</h5>
              </article>
            )
          }
        })}
      </div>
    </>
    )
}

export default App;
