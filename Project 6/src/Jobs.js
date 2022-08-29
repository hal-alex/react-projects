import React, { useState, useEffect } from 'react'

const Jobs = (props) => {

  const [displayJob, setDisplayJob] = useState(props.apiResponse[0].id)

  const makeButtons = () => {
    return ( <>
      {props.apiResponse.map((job) => {
        const { company, id } = job
        return (
          <>
            <button key={job} onClick={() => setDisplayJob(id) }>{company}</button>
          </>
        )
      })}
    </>
    )
  }

  return (
    <>
      {makeButtons()}
      {props.apiResponse.map(item => {
        const { id, title } = item
        if (id === displayJob) {
          return (
            <>
              <p>{title}</p>
            </>
          )
        }
      })}
    </>
  )
}

export default Jobs