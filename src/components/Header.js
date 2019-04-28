import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';  
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
// import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

import Home from '../pages/home';
import Needs from '../pages/needs';
import Feelings from '../pages/feelings';
import Faq from '../pages/faq';
import BikeMap from '../pages/bikemap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
          <span className="navbar-text mr-3">
            <strong>{ user ? `Welcome ${user.name}` : '' }</strong>
          </span>
          <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
          <RegisterModal />
          <LoginModal />
      </Fragment>
    );

    return (
      
      <Router>
        <Navbar color="dark" dark expand="md">
          <Link className='navbar-brand' to="/">HowToChooseBike</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className='nav-link' exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/needs" activeClassName="active">Needs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/feelings" activeClassName="active">Feelings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/faq" activeClassName="active">Faq</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/bikemap" activeClassName="active">Bikes World Map</NavLink>
              </NavItem>    
            </Nav>
            <Nav className="ml-auto" navbar>
              { isAuthenticated ? authLinks : guestLinks }
            </Nav>
          </Collapse>
        </Navbar>  
        <Route exact path='/' component={Home} />
        <Route path='/needs' component={Needs} />
        <Route path='/feelings' component={Feelings} />
        <Route path='/faq' component={Faq} />
        <Route path='/bikemap' component={BikeMap} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);