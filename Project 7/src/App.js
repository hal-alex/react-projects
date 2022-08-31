import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const previousReview = () => {
    let newVar = selectedIndex - 1
    if (newVar < 0 ) {
      setSelectedIndex(data.length - 1)
    } else {
      setSelectedIndex(selectedIndex - 1)
    }
  }
  const nextReview = () => {
    let newVar = selectedIndex + 1
    if (newVar === data.length) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <>
    <button onClick={previousReview}>Prev</button>
      <button onClick={nextReview}>Next</button>
      {data[selectedIndex].name}
      {/* {data.map(item => {
        const { id, name } = item
        return name

      })} */}
    </>
  )
}

export default App;
