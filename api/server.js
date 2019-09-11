const express = require("express")
const dotenv = require("dotenv")
const request = require("request")

dotenv.config()

const app = express();

app.listen(process.env.APP_PORT, () => console.log('listening on port ' + process.env.APP_PORT))

app.get("/api/yelp", (req, res, next) => {
    // Longitude, Latitude, Location, Radius, Price, OpenNow, Term, Limit, CurrentLocation
    let yelpUrl = "https://api.yelp.com/v3/businesses/search"
    let auth = {
        authorization: "Bearer " + process.env.YELP_API_KEY
    }

    const options = {
        url: yelpUrl, 
        headers: auth
    }

    function callback(err, response, body){
        res.send(body)
    }

    request.get(options, callback)
})