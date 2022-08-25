import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, deleteTour  }) => {

  const [expandText, setExpandText] = useState(false)

  return (

        <>
          < article className='single-tour' >
            <h3>{name}</h3>
            <p>{expandText ? info : `${info.substring(0, 100)}...`}
              <button onClick={() => setExpandText(!expandText)}> {expandText ? "Read Less" : "Read More"}</button>
            </p>
            <img src={image} alt={name} />
            <p>{price}</p>
            <button className='delete-btn' onClick={() => deleteTour(id)}> Delete Tour </button>
          </article >

        </>

  )
};

export default Tour;

