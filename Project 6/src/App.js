import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Jobs from './Jobs'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  // Take 2
  
  const [isLoading, setIsLoading] = useState(true)
  const [experience, setExperience] = useState([])
  const [selectedItem, setSelectedItem] = useState(0)

  const pullData = async () => {
    try {
      const response = await (await fetch(url)).json()
      setExperience(response)
      setIsLoading(false)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    pullData()
  }, [])

    if (isLoading) {
      return (
        <section className="section loading">
          <h1>Loading</h1>
        </section>
      )
    }
  const { company, dates, duties, title } = experience[selectedItem]
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
        </div>
        <div className="jobs-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return <button className={`job-btn ${index == selectedItem && "active-btn"}`}  key={item.id} onClick={() => setSelectedItem(index)}>{item.company}</button>
          })}
        </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return <div key={index} className="job-desc">
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            })}
          </article>
        </div>
      </section>
    </>
  )

  // Take 1

  // const [isLoading, setIsLoading] = useState(true)
  // const [apiResponse, setAPIResponse] = useState([])
  // const [personIndex, setPersonIndex] = useState(0)

  // useEffect(() => {
  //   setIsLoading(true)
  //   const pullData = async () => {
  //     const response = await fetch(url)
  //     const jsonResponse = await response.json()
  //     setAPIResponse(jsonResponse)
  //     setIsLoading(false)
  //   }
  //   pullData()
  // }, [])
  

  // return (
  //   <>
  //     {isLoading ? "Loading..." : <Jobs apiResponse={apiResponse}></Jobs> }
  //   </>
  // )
}

export default App
