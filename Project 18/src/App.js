import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const { data, loading } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])

  }, [loading, page])

  const handlePage = (index) => {
    setPage(index)
  }


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  return (
    <main>
      <div className="section-title">
        <h1> {loading ? "Loading..." : "Pagination Example"} </h1>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return (
              <Follower key={item.id} {...item}></Follower>
            )
          })}
        </div>
        {loading ? "" : (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>previous page</button>
            {data.map((item, index) => {
              return <button onClick={() => handlePage(index)}
                className={`page-btn ${index === page ? "active-btn" : ""}`}
              >{index + 1}</button>
            })}
            <button className="next-btn" onClick={nextPage}>next page</button>

          </div>
        )}

      </section>
    </main>

  )
}

export default App
