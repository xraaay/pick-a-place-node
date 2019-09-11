import axios from 'axios'

const getBusinesses = data => {
    let url = "api/yelp"
    const config = {
        method: "POST",
        data: data
    }
    return axios(url, config)
}

export { getBusinesses }