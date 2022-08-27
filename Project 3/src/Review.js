import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [userIndex, setUserIndex] = useState(1)

  const handleclick = (e) => {
    if (e.target.value === "right") {
      setUserIndex(userIndex + 1)
      if (userIndex === 5) {
        setUserIndex(1)
      }
    }
    else if (e.target.value === "left") {
      setUserIndex(userIndex - 1)
      if (userIndex === 0) {
        setUserIndex(4)
      }
    }
    console.log(userIndex)
  }
  return (
    <>
      {people.map((person, index) => {
        const { id, name } = person
        if (id == userIndex)
        return (
          <div key={index}>
            {name}
          </div>
        )
      })}
      <button value="left" onClick={handleclick}>Left</button>
      <button value="right" onClick={handleclick}>Right</button>
    </>
  )
}

export default Review;
