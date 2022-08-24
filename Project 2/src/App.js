import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [tourData, setTourData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTourData(tours)
      console.log("tour data", tourData)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    }, [])
  
  // const processeTours = () => {
  //   console.log(tourData)
  //   return tourData.map(item => {
  //     const { id, name } = item
  //     return name
  //   })
  // }

  return(
    <>
      {isLoading ? <Loading></Loading> : "hello"}
    </>

  )
}

export default App
{/* <>
      {isLoading ? <Loading></Loading> : (processeTours())}
    </> */}