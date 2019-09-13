const initialState = {
    // longitude: position.coords.longitude,
    // latitude: position.coords.latitude,
    term: "restaurant",
    radius: 8046,
    limit: 50,
    open_now: true,
    price: 1
}

export default function(state = initialState, action){
    switch(action.type){
        case "SET_SEARCH":
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}