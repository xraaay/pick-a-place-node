/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link, withRouter } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  NavLink
} from "reactstrap";
import SearchForm from "./SearchForm";
import { resetSearch } from './actions/searchActions'
import { connect } from 'react-redux'

class AppNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };

  handleRoutes = route => {
    this.props.history.push(route)
  }

  handleRollTheDice = () => {
    this.props.resetSearch()
    this.props.history.push("/rtd")
  }

  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/" tag={Link}>
                <span>Pick a Place</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation" style={{overflow: "auto"}}>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <NavLink to="/" tag={Link}>
                      <span>Pick a Place</span>
                    </NavLink>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={this.handleRollTheDice}
                  >
                    <i className="tim-icons icon-app"></i>
                    Roll The Dice
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    href="#"
                    onClick={() => this.props.history.push("/wyr")}
                    >
                    <i className="tim-icons icon-atom" />
                    Would You Rather
                  </NavLink>
                </NavItem> */}
                <NavItem>
                    <SearchForm />
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(connect(null, { resetSearch })(AppNavbar));
