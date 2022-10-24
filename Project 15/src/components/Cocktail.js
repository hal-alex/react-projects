import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Cocktail = ( { drink } ) => {

  if (!drink) {
    return (
      <>
        <h4>not found</h4>
      </>
    )
  }

  const { strDrink } = drink
  
  return (
    <div>
      <h2>cocktail component</h2>
      {strDrink}
    </div>
  )
}

export default Cocktail
