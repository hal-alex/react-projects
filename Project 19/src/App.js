import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

const apiKey = `?client_id=${process.env.REACT_APP_API_KEY}`

function App() {

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const mounted = useRef(false)
  const [newImages, setNewImages] = useState(false)


  const pullData = async () => {
    setLoading(true)
    let url
    let urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    if (query) {
      url = `${searchUrl}${apiKey}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${apiKey}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        }
        else if (query) {
          return [...oldPhotos, ...data.results]
        }
        else {
          return [...oldPhotos, ...data]
        }
      })
      setNewImages(false)
      setLoading(false)
      console.log(data)
    } catch (error) {
      setNewImages(false)
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    pullData()
    // eslint-disable-next-line
  }, [page])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newImages) return
    if (loading) return
    setPage((oldPage) => oldPage + 1)
     // eslint-disable-next-line
  }, [newImages])

  const event = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 25) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", event)
    return () => window.removeEventListener("scroll", event)
  }, [])

  // useEffect(() => {
  //   const event = window.addEventListener("scroll", () => {
  //     if (!loading && (window.innerHeight + window.scrollY)
  //       >= document.body.scrollHeight - 25) {
  //       console.log("end of page")
  //       setPage((oldPage) => {
  //         return oldPage + 1
  //       })
  //     }
  //   })
  //   return () => window.removeEventListener("scroll", event)
  //   // eslint-disable-next-line
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query) return
    if (page === 1) {
      pullData()
    }
    setPage(1)
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search"
            className="form-input" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch></FaSearch>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo}></Photo>
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  )
}

export default App
