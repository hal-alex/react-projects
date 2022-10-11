// import React, { useState, useContext } from 'react'
// import sublinks from './data'

// const AppContext = React.createContext()

// const AppProvider = ({ children }) => {

//     const [showItem, setShowItem] = useState(false)
//     const [hoveredItem, setHoveredItem] = useState("")

//     const displayItem = () => {
//         setShowItem(true)
//     }

//     const hideItem = () => {
//         setShowItem(false)
//     }

//     return (
//         <AppContext.Provider value={{ showItem, displayItem, hideItem, sublinks, setHoveredItem }} >
//         {children}
//         </AppContext.Provider>
//     )
// }

// export { AppContext, AppProvider }

// Take 2

import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

    const [location, setLocation] = useState({})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    return (
        <AppContext.Provider
            value={{ 
                isSidebarOpen, 
                isSubmenuOpen, 
                openSidebar, 
                closeSidebar, 
                openSubmenu, 
                closeSubmenu, 
                location  
                }}
                
        > {children} </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

