import React, { Component } from 'react';
import './Header.scss';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import NotificationIcon from 'react-icons/lib/fa/bell-o';
import Bars from 'react-icons/lib/fa/bars';
import Cart from 'react-icons/lib/fa/shopping-cart';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {

    alert("hello");
  }
  render() {
    return (
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Share N Save</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav pullRight>
          <NavItem eventKey={1} >Hello User</NavItem>
          <NavItem eventKey={2} href="#"><Cart onClick={this.onClick} /></NavItem>
          <NavItem eventKey={3} href="#"><NotificationIcon onClick={this.onClick} /></NavItem>
          <NavItem eventKey={4} href="#"><Bars onClick={this.onClick} /></NavItem>

        </Nav>

      </Navbar>
    );
  }
}

export default Header;