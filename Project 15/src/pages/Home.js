import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <SearchForm></SearchForm>
      <section className="section">
        <CocktailList></CocktailList>
      </section>
    </div>
  )
}

export default Home
