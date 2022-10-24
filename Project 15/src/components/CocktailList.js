import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const CocktailList = () => {

  const { drinksList, searchTerm } = useGlobalContext()

  const filteredResults = drinksList.filter(item => 
    item["strDrink"].
    toLowerCase().
    includes(searchTerm.toLowerCase()))

  console.log(filteredResults)

  return (
    <div className='cocktails-center'>
      {filteredResults.map(drink => {
        const { strDrink, strDrinkThumb, idDrink } = drink
        return (
          <article className="" key={idDrink}>

            <div className="img-container">
              <img src={strDrinkThumb} alt="" />
            </div>
            <div className="cocktail-footer">
              <h3>{strDrink}</h3>
              <Link to={`/drinks/${idDrink}`}>
                <button className='btn' >More Info</button>
              </Link>
            </div>

          </article>
        )
      })}
    </div>
  )
}

export default CocktailList
