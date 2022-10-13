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

  // const [cart, setCart] = useState(cartItems)

  useEffect(() => {
    const pullData = async () => {
      dispatch({type: "LOADING"})
      const data = await fetch(url)
      const jsonData = await data.json()
      dispatch({ type: "DISPLAY_CART_ITEMS", payload: jsonData })
    }
    pullData()
  }, [])
  

  const emptyCart = () => {
    dispatch({type: "REMOVE_ALL"})
  }

  const removeSingleItem = (id) => {
    dispatch({type: "REMOVE_SINGLE_ITEM", payload: id})
  }

  const increaseAmount = (id) => {
    dispatch({type: "INCREASE_AMOUNT", payload: id})
  }

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id })
  }

  useEffect(() => {
    dispatch({type: "UPDATE_TOTAL"})
  }, [state.cart])
  

  return (
    <AppContext.Provider
      value={{
        ...state,
        emptyCart, 
        removeSingleItem,
        increaseAmount, 
        decreaseAmount, 
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
