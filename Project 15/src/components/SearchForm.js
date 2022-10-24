import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleChange = (e) =>{
    setSearchTerm(e.target.value)
  }
  return (
    <div>
      <h2>search form component</h2>
      <input 
      type="search"
      placeholder="Martini"
      onChange ={handleChange}
       />
    </div>
  )
}

export default SearchForm
