import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const CocktailList = () => {

  const { drinksList, searchTerm, loading } = useGlobalContext()

  const filteredResults = drinksList.filter(item =>
    item["strDrink"].toLowerCase().includes(searchTerm.toLowerCase()))

  // console.log(filteredResults)

    if (loading) {
      return <Loading></Loading>
    }

  if (filteredResults.length < 1) {
    return (
      <section className="section-title">
        <h4>Sorry, no results found</h4>
      </section>
    )
  }

  return (
    <div className='cocktails-center'>
      {filteredResults.map(drink => {
        const { strDrink, strDrinkThumb, idDrink, strCategory } = drink
        return (
          <article className="" key={idDrink}>

            <div className="img-container">
              <img src={strDrinkThumb} alt="" />
            </div>
            <div className="cocktail-footer">
              <h3>{strDrink}</h3>
              <h5>{strCategory}</h5>
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
