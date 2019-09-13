export const setSearch = data => dispatch => {
    dispatch({
        type: "SET_SEARCH",
        payload: data
    })
}

export const resetSearch = () => dispatch => {
    dispatch({
        type: "RESET_SEARCH"
    })
}