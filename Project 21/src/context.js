import React, { useState, useContext, useEffect } from 'react'
// make sure to use https


export const API_ENDPOINT = `https://www.omdbapi.com/`
const AppContext = React.createContext()

const getStorageSearch = () => {
  let searchTerm = "love"
  if(localStorage.getItem("searchTerm")) {
    searchTerm = localStorage.getItem("searchTerm")
  }
  return searchTerm
}

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState(getStorageSearch())
  const [movies, setMovies] = useState([])
  const [searchError, setSearchError] = useState("")

  useEffect(() => {

    const pullMovies = async () => {
      setLoading(true)
      try {
        const response = await fetch
          (`${API_ENDPOINT}?s=${searchQuery}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        // console.log(response)
        const data = await response.json()
        if (data.Response === "False") {
          if (data.Error === "Incorrect IMDb ID.") {
            setSearchError("Please enter a valid movie name")
          } else {
            setSearchError(data.Error)
            setLoading(false)
          }
        } else {
          // console.log(data["Search"])
          setMovies(data["Search"])
          setSearchError("")
          setLoading(false)
        }

      } catch (error) {
        console.log(error.response)
        setLoading(false)
      }
    }
    pullMovies()
  }, [searchQuery])

  useEffect(() => {
    localStorage.setItem("searchTerm", searchQuery)
  }, [searchQuery])

  return <AppContext.Provider

    value={{
      loading,
      searchQuery,
      setSearchQuery,
      movies,
      searchError,
    }}>{children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
