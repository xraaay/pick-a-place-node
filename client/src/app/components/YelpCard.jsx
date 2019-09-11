import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    Badge,
} from 'reactstrap'
import Rating from 'react-rating'
class YelpCard extends React.Component {
    render() {
        let distance = Math.round(this.props.business.distance / 1600)
            return (
                <Card className="card-profile profile-bg">
                    <a href={this.props.business.url}>
                        <div style={{ height: "231.762px", display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                            <CardImg src={this.props.business.image_url} style={{ flex: 'none', width: '100%' }} />
                        </div>
                    </a>
                    <CardTitle tag="h3">{this.props.business.name}</CardTitle>
                    <CardText className="text-center">
                        <Rating
                            readonly={true}
                            initialRating={this.props.business.rating}
                            emptySymbol={<i className="far fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                        />
                        <br></br>
                        <span className="text-center">{this.props.business.is_closed
                            ? <Badge color="danger" pill>Closed</Badge>
                            : <Badge color="success" pill>Open</Badge>
                        }
                        </span>
                        <br></br>
                        <strong>{`${this.props.business.location.address1}, ${this.props.business.location.city}, ${this.props.business.location.zip_code}`}</strong>
                        <br></br>
                        <strong>{this.props.business.display_phone}</strong>
                        <br></br>
                    </CardText>
                    <CardText className="text-left ml-3 mt-3 mb-3">

                        <strong>Distance:</strong> {distance === 1 ? distance + " mile" : distance + " miles"}
                        <br></br>
                        <strong>Price:</strong> {this.props.business.price}
                        <br></br>
                        <strong>Reviews:</strong> {this.props.business.review_count}
                        <br></br>
                        <strong>Categories:</strong> {this.props.business.categories.map((item, index) => {
                            return (index ? ', ' : "") + item.title
                        })}
                    </CardText>
                </Card>
            )
    }
}

export default YelpCard;