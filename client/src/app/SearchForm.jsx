import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    NavLink,
    Container,
    Row,
    Input,
    FormGroup,
    Label,
    CustomInput,
    ButtonGroup
} from 'reactstrap'
import {
    Formik,
    Form,
    ErrorMessage,
    FieldArray
} from 'formik'
import { initialValues, validationSchema } from './schemas/SearchForm'
import { getBusinesses } from './services/yelpService'
import { connect } from 'react-redux'
import { setSearch } from './actions/searchActions' 

class SearchForm extends React.Component {
    state = {
        isOpen: false,
        price: []
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    priceBtn = (selected) => {
        const index = this.state.price.indexOf(selected);
        if (index < 0) {
            this.state.price.push(selected);
        } else {
            this.state.price.splice(index, 1);
        }
        this.setState({ price: [...this.state.price] });
    }

    getBusiness = (location, data) => {
        debugger
        const searchObj = {
            term: data.category,
            radius: data.radius,
            openNow: data.openNow,
        }

        //Price
        let priceStr = "";
        this.state.price.forEach(item => {
            priceStr = priceStr + item + ","
        })
        searchObj.price = priceStr.substr(0, priceStr.length-1)

        //Location
        if (location) {
            searchObj.longitude = location.coords.longitude
            searchObj.latitude = location.coords.latitude
        } else {
            searchObj.location = data.location
        }
        // getBusinesses(searchObj)
        this.props.setSearch(searchObj)
    }

    checkUseLocation = data => {
        if (data.useLocation) {
            navigator.geolocation.getCurrentPosition(e => this.getBusiness(e, data))
        } else {
            this.getBusiness(null, data)
        }
    }

    render() {
        return (
            <>
                <NavLink onClick={this.toggleModal} href="#">
                    <i className="tim-icons icon-zoom-split"></i>Search
                </NavLink>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} modalClassName="modal-black">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModal}>
                            <i className="tim-icons icon-simple-remove"></i>
                        </button>
                        <h5 className="modal-title">Search</h5>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={this.checkUseLocation}
                    >
                        {props => {
                            const { values, handleChange, handleBlur, handleSubmit } = props
                            return (
                                <>
                                    <Form className="form" onSubmit={handleSubmit}>
                                        <ModalBody>
                                            <Container>
                                                <Row>
                                                    <label>Category</label>
                                                    <Input
                                                        name="category"
                                                        placeholder="Category"
                                                        type="text"
                                                        value={values.category}
                                                        onChange={handleChange}
                                                        onFocus={() => {
                                                            this.setState({ categoryFocus: true })
                                                        }}
                                                        onBlur={e => {
                                                            handleBlur(e)
                                                            this.setState({ categoryFocus: false })
                                                        }}
                                                    />
                                                    <ErrorMessage name="category">
                                                        {msg => <div className="text-danger">{msg}</div>}
                                                    </ErrorMessage>
                                                </Row>
                                                <Row>
                                                    <label>Location</label>
                                                    <Input
                                                        name="location"
                                                        placeholder="Location"
                                                        type="text"
                                                        value={values.location}
                                                        onChange={handleChange}
                                                        onFocus={() => {
                                                            this.setState({ locationFocus: true })
                                                        }}
                                                        onBlur={e => {
                                                            handleBlur(e)
                                                            this.setState({ locationFocus: false })
                                                        }}
                                                        disabled={values.useLocation}
                                                    />
                                                    <ErrorMessage name="location">
                                                        {msg => <div className="text-danger">{msg}</div>}
                                                    </ErrorMessage>
                                                </Row>
                                                <Row>

                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                name="useLocation"
                                                                type="checkbox"
                                                                value={values.useLocation}
                                                                onChange={handleChange}
                                                            />{' '}
                                                            Use Location
                                                    <span className="form-check-sign">
                                                                <span className="check"></span>
                                                            </span>
                                                        </Label>
                                                    </FormGroup>
                                                </Row>
                                                <Row>
                                                    <Label>Distance</Label>
                                                    <Input
                                                        style={{ backgroundColor: "#171941" }}
                                                        type="select"
                                                        name="radius"
                                                        value={values.radius}
                                                        onChange={handleChange}
                                                    >
                                                        <option value={1609}>1 mile</option>
                                                        <option value={8046}>5 miles</option>
                                                        <option value={16093}>10 miles</option>
                                                        <option value={32186}>20 miles</option>
                                                    </Input>
                                                </Row>
                                                <Row className="mt-2">
                                                    <FieldArray
                                                        name="price"
                                                        render={() => {
                                                            let priceArr = [1, 2, 3, 4];
                                                            return (
                                                                <>
                                                                    <label>Price</label>
                                                                    {priceArr.map(item => {
                                                                        return (
                                                                            <FormGroup key={item} check inline>
                                                                                <Label check>
                                                                                    <Input name={`price.${item}`} type="checkbox" onClick={() => { this.priceBtn(item) }} /> {"$".repeat(item)}
                                                                                    <span className="form-check-sign">
                                                                                        <span className="check" />
                                                                                    </span>
                                                                                </Label>
                                                                            </FormGroup>
                                                                        )
                                                                    })}
                                                                </>
                                                            )
                                                        }}
                                                    >
                                                    </FieldArray>
                                                </Row>
                                                <Row>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input
                                                                name="openNow"
                                                                type="checkbox"
                                                                value={values.openNow}
                                                                onChange={handleChange}
                                                            />{''}
                                                            Open Now
                                                        <span className="form-check-sign">
                                                                <span className="check"></span>
                                                            </span>
                                                        </Label>
                                                    </FormGroup>
                                                </Row>

                                            </Container>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="secondary" onClick={this.toggleModal}>
                                                Close
                                        </Button>
                                            <Button color="primary" type="submit">
                                                Submit
                                        </Button>
                                        </ModalFooter>
                                    </Form>
                                </>
                            )
                        }}
                    </Formik>
                </Modal>
            </>
        )
    }
}

export default connect(null, { setSearch })(SearchForm)