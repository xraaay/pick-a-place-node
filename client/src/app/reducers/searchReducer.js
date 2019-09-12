export default function(state = {}, action){
    switch(action.type){
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}