import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {

  const { searchQuery, setSearchQuery, searchError } = useGlobalContext()

  return (
    <form action="" className="search-form">
      <h2>Search For A Movie</h2>
      <input
        type="text"
        className="form-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchError && <div className="error">{searchError}</div> }
    </form>
  )
}

export default SearchForm
