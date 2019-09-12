const express = require("express")
const dotenv = require("dotenv")
const request = require("request")
const bodyParser = require('body-parser')

dotenv.config()

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(process.env.APP_PORT, () => console.log('listening on port ' + process.env.APP_PORT))

app.post("/api/yelp", (req, res, next) => {
    let queryString = ""
    
    for(let x in req.body){
        let add = `${x}=${req.body[x]}&`
        queryString = queryString+add
    }

    queryString = queryString.substr(0, queryString.length-1)
    
    let yelpUrl = "https://api.yelp.com/v3/businesses/search?" + queryString
    let auth = {
        authorization: "Bearer " + process.env.YELP_API_KEY
    }
    
    console.log(yelpUrl)
    const options = {
        url: yelpUrl, 
        headers: auth
    }
    
    function callback(err, response, body){
        res.send(body)
    }
    
    request.get(options, callback)
})