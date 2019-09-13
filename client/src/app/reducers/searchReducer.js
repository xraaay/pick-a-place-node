const initialState = {
    item:{
        term: "restaurant",
        radius: 8046,
        limit: 50,
        open_now: true,
        price: 1
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case "SET_SEARCH":
            return {
                ...state,
                item: action.payload
            }
        case "RESET_SEARCH":
            return initialState
        default:
            return state
    }
}