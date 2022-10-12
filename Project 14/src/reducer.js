const reducer = (state, action) => {
    if (action.type === "REMOVE_ALL") {
        return {
            ...state, cart:[]
        }
    }
    if (action.type === "REMOVE_SINGLE_ITEM") {
        const newItems = state.cart.filter(item => item.id !== action.payload)
        console.log(action)
        return {
            ...state, cart: newItems
        }
    }

    return 
}

export default reducer