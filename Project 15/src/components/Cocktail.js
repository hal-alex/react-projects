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

  const { strDrink, strDrinkThumb, strCategory, 
    strAlcoholic, strGlass, strInstructions } = drink
  
  const drinkArray = Object.entries(drink)
  const ingredients = drinkArray.filter(item => item[0].includes("strIngredient"))
  // console.log("ing", ingredients)
  return (
    <div>
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img src={strDrinkThumb} alt="drink-image" />
        <div className="drink-info">
          <p> <span className='drink-data'>Name:</span> {strDrink} </p>
          <p> <span className='drink-data'>Category:</span> {strCategory} </p>
          <p> <span className='drink-data'>Alco?</span> {strAlcoholic} </p>
          <p> <span className='drink-data'>Glass:</span> {strGlass} </p>
          <p> <span className='drink-data'>Instructions:</span> {strInstructions} </p>
          <p> <span className='drink-data'>Ingredients:</span> 
            {ingredients.map((item, index) => {
              return item[0] ? <span key={index}> {item[1]} </span> : ""
              {/* {item[0] ? }
              if(item[0]) {
                return( 
                  <span key={index}> {item[1]} </span>
                 )
              }  */}
            })}
           </p>

        </div>
      </div>
    </div>
  )
}

export default Cocktail
