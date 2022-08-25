import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [tourData, setTourData] = useState([])

  const deleteTour = (id) => {
    const updatedTours = tourData.filter((tour) => tour.id !== id)
    setTourData(updatedTours)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTourData(tours)
      console.log("tour data", tourData)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    }, [])
  
    if (tourData.length === 0) {
      return (
        <main>
          <div className='title'>
            <h3>All tours have been deleted</h3>
            <button onClick={fetchData} className="btn">Get all tours</button>
          </div>
        </main>
      )
 
    }

  return(
    <>
      {isLoading ? <Loading></Loading> : <Tours tourData={tourData} deleteTour={deleteTour}></Tours>}
    </>

  )
}

export default App
