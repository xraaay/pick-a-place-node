import React, { Component } from 'react'
import * as yelpService from './services/YelpService'
import swal from "sweetalert2"

class RollTheDice extends Component {
    componentDidMount(){
        this.getGeoLocation()
    }

    rtd(position){
        let data = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            term: "restaurant",
            radius: 8046,
            limit: 50,
            open_now: true,
            price: 1
        }
        yelpService.getBusinesses(data)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    getGeoLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.rtd, function(){
                swal({
                    type: "error",
                    title: "Location not found",
                    text: "Make sure you have https:// at the front of the url and allow location access. You can also use the Search functionality instead"
                })
            })
        } else {
            swal({
                type: "error",
                title: "Location not found",
                text: "Make sure you have https:// at the front of the url and allow location access. You can also use the Search functionality instead"
            })
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default RollTheDice