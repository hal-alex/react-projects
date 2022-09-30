import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [displayLinks, setDisplayLinks] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-headers">
            <img src={logo} alt="logo" />
            <button className="nav-toggle" onClick={() => setDisplayLinks(!displayLinks)}>
              <FaBars></FaBars>
            </button>
          </div>
          <div className="links-container show-container"

          >
            <ul className="links">
              {links.map((link) => {
                const { id, url, text} = link
                return (
                    <li key={id}>
                      <a href={url}> {text} </a>
                    </li>
                )
              })}
            </ul>
          </div>
          <ul className="social-icons">
              {social.map((link) => {
                const { id, url, icon } = link
                return (
                  <li key={id}>
                    <a href={url}> {icon} </a>
                  </li>
                )
              })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

 