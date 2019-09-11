import React, { Component } from 'react'
import * as yelpService from './services/YelpService'

class RollTheDice extends Component {
    componentDidMount(){
        let data = {

        }
        yelpService.getBusinesses()
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default RollTheDice