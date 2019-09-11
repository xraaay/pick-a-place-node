import React, { Component } from 'react'
import * as yelpService from './services/yelpService'
import swal from "sweetalert2"
import { shuffleResults } from './services/reuseableFunctions'
import {
    Row,
    Col,
    Container,
} from 'reactstrap'
import YelpCard from './components/YelpCard'


class RollTheDice extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.getGeoLocation()
    }

    rtd = (position) => {
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
                let shuffle = shuffleResults(response.data.businesses)
                let three = shuffle.slice(0, 3)
                this.setState({
                    results: three
                })
            })
            .catch(console.log)
    }

    getGeoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.rtd, this.throwSwalError)
        } else {
            this.throwSwalError()
        }
    }

    throwSwalError() {
        swal.fire({
            type: "error",
            title: "Location not found",
            text: "Make sure you allow location access."
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Row style={{ marginTop: "100px" }}>
                        {this.state.results && this.state.results.map(item => {
                            return (
                                <Col sm="4">
                                    <YelpCard key={item.id} business={item}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default RollTheDice