import React, { useContext, useState, useEffect } from 'react'
import logo from './images/logo.svg'
import { FaBars, FaWordpress } from 'react-icons/fa'
import { AppContext } from "../src/context"

const Navbar = () => {

  const [hoveredItem, setHoveredItem] = useState("")

  const { sublinks, } = useContext(AppContext)

  const [selectedItem, setSelectedItem] = useState([])

  useEffect(() => {
    const handleHover = () => {
      // console.log(hoveredItem)
      let newArray = sublinks.filter(item => item.page === hoveredItem)
      // console.log(newArray)
      setSelectedItem(newArray)
    }
    handleHover()
  }, [hoveredItem])
  
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="nav-logo" />
        </div>
        <ul className="nav-links">
            {sublinks.map((link, index) => {
              return (
                <li key={index}> <button 
                className='link-btn' 
                onMouseEnter={() => setHoveredItem(link.page)}
                  onMouseLeave={() => setHoveredItem("") }
                > {link.page} </button> </li>
              )
            })}
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
      <aside 
        onMouseEnter={() => setHoveredItem(hoveredItem)}
        onMouseLeave={() => setHoveredItem("")}
        className={`submenu ${hoveredItem ? "show" : ""}`}
        
        
        >
        <section
        >{selectedItem.map((item) => {
          const { page, links } = item
          console.log(links)
          return (
            <div className='submenu-center'>
              <h4>{ page }</h4>
              {links.map((link) => {
                  const { label, icon, url } = link
                  console.log(link)
                  return (
                    <div> {icon} {label} </div>
                  )
              })}
            </div>
          )
        })}
        
        </section>
      </aside>
    </nav>
  )
}

export default Navbar
