import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Jobs from './Jobs'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [apiResponse, setAPIResponse] = useState([])
  const [personIndex, setPersonIndex] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    const pullData = async () => {
      const response = await fetch(url)
      const jsonResponse = await response.json()
      setAPIResponse(jsonResponse)
      setIsLoading(false)
    }
    pullData()
  }, [])
  

  return (
    <>
      {isLoading ? "Loading..." : <Jobs apiResponse={apiResponse}></Jobs> }
    </>
  )
}

export default App
