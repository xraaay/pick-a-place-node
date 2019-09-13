import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'



class LandingPage extends Component {
    constructor(props) {
        super(props);
        let windowScrollTop;
        if (window.innerWidth >= 768) {
            windowScrollTop = window.pageYOffset / 3;
        } else {
            windowScrollTop = 0;
        }
        this.state = {
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        };
    }
    componentDidMount() {
        document.body.classList.add("ecommerce-page");
        if (window.innerWidth >= 768) {
            var windowScrollTop = window.pageYOffset / 3;
            this.setState({
                transform: "translate3d(0," + windowScrollTop + "px,0)"
            });
            window.addEventListener("scroll", this.resetTransform);
        }
    }
    componentWillUnmount() {
        if (window.innerWidth >= 768) {
            window.removeEventListener("scroll", this.resetTransform);
        }
    }
    resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
    };

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="header header-1">
                        <div className="page-header header-filter">
                            <div
                                className="page-header-image"
                                style={{
                                    backgroundImage:
                                        "url(https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg)",
                                    transform: this.state.transform
                                }}
                            />
                            <Container>
                                <div className="mr-auto text-left col-md-7 col-lg-6">
                                    <h1 className="title">Pick a Place</h1>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="main">
                        <div className="section">
                            <Container className="mx-auto text-center">
                                <h3>Don't know what to eat?</h3>
                                <h4>Let the fates decide for you</h4>
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => {this.props.history.push("/rtd")}}
                                >Roll the Dice
                                </Button>
                            </Container>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LandingPage