import React from 'react'
import { useGlobalContext } from "../context"
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import Cocktail from '../components/Cocktail'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const { drinksList } = useGlobalContext()
  const { drinkId } = useParams()
  const drink = drinksList.find((item) => item.idDrink === drinkId)
  console.log("drink ID", drinkId)
  console.log("drink", drink)

  return (
    <div>
      <h2>single cocktail page </h2>
      <Cocktail drink={drink}></Cocktail>
    </div>
  )
}

export default SingleCocktail
