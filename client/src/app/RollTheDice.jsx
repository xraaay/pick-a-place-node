import React, { Component } from 'react'
import * as yelpService from './services/yelpService'
import swal from "sweetalert2"
import { shuffleResults } from './services/reuseableFunctions'
import {
    Row,
    Col,
    Container,
    Button
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
                this.setState({
                    businesses: response.data.businesses
                })
                this.shuffleAndSlice(response.data)
            })
            .catch(console.log)
    }

    shuffleAndSlice = (data) => {
        if(!data.businesses){
            data = this.state.businesses
        } else {
            data = data.businesses
        }
        let shuffle = shuffleResults(data)
        let three = shuffle.slice(0, 3)
        this.setState({
            results: three
        })
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
                                <Col sm="4" key={item.id}>
                                    <YelpCard business={item}/>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col className="text-center mt-3">
                            {this.state.results[0] ? <Button size="lg" color="success" onClick={this.shuffleAndSlice}>Reroll</Button> : null}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default RollTheDice