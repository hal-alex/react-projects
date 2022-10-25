import React, { useState, useContext, useEffect } from 'react'
import axios from "axios"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [drinksList, setDrinksList] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  const pullData = async () => {
    setLoading(true)
    try {
      const { data } = await axios(url)
      setDrinksList(data.drinks)
      // console.log(drinksList)
      setLoading(false)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    pullData()
  }, [])

  return <AppContext.Provider
    value={{
      drinksList,
      loading, 
      setSearchTerm, 
      searchTerm
    }}
  >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
