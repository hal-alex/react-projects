import React,  { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from "../src/context"

const Sidebar = () => {

  const { isSideBarOpen, closeSideBar } = useContext(AppContext)


  return (
    <aside className={`sidebar ${isSideBarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={closeSideBar} className="close-btn"> <FaTimes></FaTimes> </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}> {icon} {text}</a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((item) => {
          const { id, url, icon } = item
          return (
            <li key={id}>
              <a href={url}> {icon} </a>
            </li>
          )
        })}
      </ul>

    </aside>
  )
}

export default Sidebar
