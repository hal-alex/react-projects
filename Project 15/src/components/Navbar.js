import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")} >
          <img src={logo} alt="" className='logo' />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")} >
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "link active" : "link")} >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
