import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {

  const { movieID } = useParams()
  const [movie, setMovie] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const pullMovies = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_ENDPOINT}?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${movieID}`)
        const data = await response.json()
        setMovie(data)
        console.log(data.Error)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    pullMovies()
    // eslint-disable-next-line
  }, [])

  if (movie.Error === "Incorrect IMDb ID.") {
    return (
      <>
        <h2>Movie Not Found</h2>
        <Link to="/"><button className="btn">Back Home</button></Link>
      </>
    )
  }

  return (
    <>
      {loading ? <h3>Loading...</h3> : (
        <section className="single-movie" >
          <img src={movie.Poster} alt="" />
          <div className="single-movie-info">
            <h2>{movie.Title}</h2>
            <p>Plot: {movie.Plot}</p>
            <p>Actors: {movie.Actors}</p>
            <h4>Release Year: {movie.Year}</h4>
            <Link to="/"><button className="btn">Back Home</button></Link>
          </div>
        </section>)
      }
    </>

  )
}

export default SingleMovie
