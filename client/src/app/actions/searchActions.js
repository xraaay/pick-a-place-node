export const setSearch = data => dispatch => {
    dispatch({
        type: "SET_SEARCH",
        payload: data
    })
}