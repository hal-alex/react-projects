import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import About from './About'
import Error from './Error'
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path="/movies/:movieID" element={<Movie></Movie>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
