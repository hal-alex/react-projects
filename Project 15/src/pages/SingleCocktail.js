import React from 'react'
import { useGlobalContext } from "../context"
import { useParams, Link } from 'react-router-dom'
import Cocktail from '../components/Cocktail'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const { drinksList } = useGlobalContext()
  const { drinkId } = useParams()
  const drink = drinksList.find((item) => item.idDrink === drinkId)
  // console.log("drink ID", drinkId)
  // console.log("drink", drink)

  return (
    <section className="section cocktail-section">
      <Link to="/"> <button className="btn btn-primary">Back Home</button> </Link>
      <Cocktail drink={drink}></Cocktail>
    </section>

  )
}

export default SingleCocktail
