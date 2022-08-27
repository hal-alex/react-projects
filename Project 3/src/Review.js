import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  // Second approach
  
  const [personIndex, setPersonIndex] = useState(0)
  const { id, name, job, image, text } = people[personIndex]

  const checkNumber = (number) => {
    if (number > people.length -1) {
      return 0
    } else if (number < 0 ) {
      return people.length - 1
    } else {
      return number
    }
  }

  const leftReview = () => {
    setPersonIndex((personIndex) => {
      let newPersonIndex = personIndex + 1
      return checkNumber(newPersonIndex)
    })
  }

  const rightReview = () => {
    setPersonIndex((personIndex) => {
      let newPersonIndex = personIndex - 1
      return checkNumber(newPersonIndex)
    })

  }

  const generateRandomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    console.log("before if statement", randomNumber)
    // while (randomNumber === personIndex) {
    //   generateRandomReview()
    // }
    if (randomNumber === personIndex) {
      generateRandomReview()
    }
    console.log("after if statement", randomNumber)
    setPersonIndex(randomNumber)
  }

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{job}</p>
        <img src={image} alt={name} />
        <p>{text}</p>
        <button onClick={leftReview}> <FaChevronLeft></FaChevronLeft> </button>
        <button onClick={rightReview}> <FaChevronRight></FaChevronRight> </button>
        <button onClick={generateRandomReview} >Surpise Person</button>
      </div>
    </>
  )

 // First approach
  // const [userIndex, setUserIndex] = useState(1)

  // const handleclick = (e) => {
  //   if (e.target.value === "right") {
  //     setUserIndex(userIndex + 1)
  //     if (userIndex === 5) {
  //       setUserIndex(1)
  //     }
  //   }
  //   else if (e.target.value === "left") {
  //     setUserIndex(userIndex - 1)
  //     if (userIndex === 0) {
  //       setUserIndex(4)
  //     }
  //   }
  //   console.log(userIndex)
  // }
  // return (
  //   <>
  //     {people.map((person, index) => {
  //       const { id, name } = person
  //       if (id == userIndex)
  //       return (
  //         <div key={index}>
  //           {name}
  //         </div>
  //       )
  //     })}
  //     <button value="left" onClick={handleclick}>Left</button>
  //     <button value="right" onClick={handleclick}>Right</button>
  //   </>
  // )
}

export default Review;
