import React from 'react';
import Tour from './Tour';
const Tours = ({ tourData, deleteTour }) => {
  return (
    <section>
      <div className='title' >
        <h2>Available Tours</h2>
        <div className='underline'></div>
        <div>
          {tourData.map(tour => {
            return <Tour key={tour["id"]} {...tour} deleteTour={deleteTour}></Tour>
          })}
        </div>
      </div>
    </section>
  )
};

export default Tours;
