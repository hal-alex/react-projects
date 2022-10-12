import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const defaultValue = {
  loading: false, 
  cart: cartItems, 
  total: 0, 
  amount: 0, 

}


const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, defaultValue)

  const [cart, setCart] = useState(cartItems)

  const emptyCart = () => {
    dispatch({type: "REMOVE_ALL"})
  }

  const removeSingleItem = (id) => {
    dispatch({type: "REMOVE_SINGLE_ITEM", payload: id})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        emptyCart, 
        removeSingleItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
