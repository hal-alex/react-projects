import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <>
      <main>
        {data.map(question => {
          return (
            <>
            <div>
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
            </div>
            </>
          )
        })}
      </main>
    </>
  )
}

export default App;
