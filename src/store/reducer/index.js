
const INITIAL_STATE = {
    products: []
}

export default (state = INITIAL_STATE, action) => {
    // console.log(state,action);
    switch (action.type) {
        case "ADDPRODUCTS":
            return ({
                ...state,
                products: [...state.products,action.payload]
            })
        default:
            return state
    }

    // return state
}