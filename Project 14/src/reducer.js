const reducer = (state, action) => {

    if (action.type === "LOADING") {
        return { ...state, loading: true }
    }

    if (action.type === "DISPLAY_CART_ITEMS") {
        return {...state, loading: false, cart: action.payload}
    }

    if (action.type === "REMOVE_ALL") {
        return {
            ...state, cart: []
        }
    }
    if (action.type === "REMOVE_SINGLE_ITEM") {
        const newItems = state.cart.filter(item => item.id !== action.payload)
        console.log(action)
        return {
            ...state, cart: newItems
        }
    }
    if (action.type === "INCREASE_AMOUNT") {
        // let increaseAmountItem = state.cart.find(({ id }) => id === action.payload)
        // increaseAmountItem.amount += 1

        // console.log(increaseAmountItem)
        // console.log(state)
        let newCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            } else {
                return item
            }
        })
        return {
            ...state, cart: newCart
        }
    }

    if (action.type === "DECREASE_AMOUNT") {
        let newCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount - 1 }
            } else {
                return item
            }
        }).filter(item => item.amount !== 0)

        return {
            ...state, cart: newCart
        }}

    // if (action.type === "UPDATE_TOTAL") {
    //     state.cart.map((item) => {
    //         state.total += item.price
    //     })

    // }

    if (action.type === "UPDATE_TOTAL") {
        const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem
            cartTotal.amount += amount
            cartTotal.total += price * amount
            return cartTotal
        }, {
            total: 0, 
            amount: 0
        })
        
        return { ...state, total, amount }

    }
    

    return state
}

export default reducer