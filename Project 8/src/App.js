import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 0
    }
    if (count < 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  return (
    <>
      <h2>Lorem Impsum Generator</h2>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>generate text</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>

    </>
  )
}

//Take 1

//   const [paras, setParas] = useState(0)
//   const [text, setText] = useState([])

//   const handleChange = (e) => {
//     setParas(e.target.value)
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setText(data)

//   }
//   return (
//     <>
//     <h1>Random Text Generator</h1>
//       <form>
//         <label htmlFor="Paragraphs">Paras
//           <input 
//           type="number" 
//           name="paras" 
//           id="paras"
//           placeholder="0"
//           value={}
//           onChange={handleChange}
//            />
//         </label>
//         <button onClick={handleSubmit}>generate</button>
//       </form>
//       <div>
//         {text.map((lorem, index) => {
//           if (index <= paras -1) {
//             return (
//               <article key={index}>
//                 <h5>{lorem}</h5>
//               </article>
//             )
//           }
//         })}
//       </div>
//     </>
//     )
// }

export default App;
