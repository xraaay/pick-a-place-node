import React from 'react';
import { Formik } from 'formik'
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    NavLink
} from 'reactstrap'
import {
    Formik,
    FormikForm,
    ErrorMessage
} from 'formik'

class SearchForm extends React.Component {
    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
                        <Formik>

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