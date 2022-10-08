import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [showItem, setShowItem] = useState(false)
    const [hoveredItem, setHoveredItem] = useState("")

    const displayItem = () => {
        setShowItem(true)
    }

    const hideItem = () => {
        setShowItem(false)
    }

    return (
        <AppContext.Provider value={{ showItem, displayItem, hideItem, sublinks, setHoveredItem }} > 
        {children} 
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }