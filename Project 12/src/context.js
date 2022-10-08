import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <AppContext.Provider value={{ 
            isModalOpen, isSideBarOpen, 
        openSideBar, closeSideBar, 
        openModal, closeModal } }>{children}</AppContext.Provider>
    )
}

export { AppContext, AppProvider }





















// const AppContext = React.createContext()

// const AppProvider = ({children}) => {
//     return (
//         <AppContext value="hello-world">{children}</AppContext>
//     )
// }