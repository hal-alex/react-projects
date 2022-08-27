import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {

  // Take 2

  // return (
  //   <>

  //   </>
  // )

  // Take 1

  const [visiblity, setVisibility] = useState(false)

  return (
    <>
    <ul>
        
        <h4>{title}</h4>
        <button onClick={() => setVisibility(!visiblity)}>{visiblity ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus> }</button>
        <p>{visiblity ? info : "" }</p>
        
    </ul>

    </>
  )
};

export default Question;
