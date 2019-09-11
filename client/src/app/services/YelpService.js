import axios from 'axios'

const getBusinesses = data => {
    let url = "api/yelp"
    const config = {
        method: "GET",
        data: data
    }
    return axios(url, config)
}

export { getBusinesses }