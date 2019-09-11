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
    ErrorMessage
} from 'formik'
import { initialValues, validationSchema } from './schemas/SearchForm'

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
                    <ModalBody>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={this.handleSubmit}
                        >
                            {props => {
                                const { values, handleChange, handleBlur, handleSubmit } = props
                                return (
                                    <Container>
                                        <Form>

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
                                                        this.setState(() => this.setState({ categoryFocus: false }))
                                                    }}
                                                />
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
                                                        this.setState(() => this.setState({ locationFocus: false }))
                                                    }}
                                                    disabled={values.useLocation}
                                                />
                                            </Row>
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
                                            <Row>
                                                <Label for="exampleSelect1">Distance</Label>
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
                                            <Row>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" /> $
                                                     <span className="form-check-sign">
                                                            <span className="check" />
                                                        </span>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" /> $$
                                                    <span className="form-check-sign">
                                                            <span className="check" />
                                                        </span>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" /> $$$
                                                    <span className="form-check-sign">
                                                            <span className="check" />
                                                        </span>
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox" /> $$$$
                                                    <span className="form-check-sign">
                                                            <span className="check" />
                                                        </span>
                                                    </Label>
                                                </FormGroup>
                                            </Row>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input
                                                        name="openNow"
                                                        type="checkbox"
                                                        value={values.openNow}
                                                        onChange={handleChange}
                                                    />{' '}
                                                    Open Now
                                                    <span className="form-check-sign">
                                                        <span className="check"></span>
                                                    </span>
                                                </Label>
                                            </FormGroup>
                                        </Form>
                                    </Container>
                                )
                            }}
                        </Formik>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                        <Button color="primary">
                            Save changes
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default SearchForm