import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label>Search For a Drink</label>
          <input
            type="search"
            placeholder="Martini"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
