import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

class Navigation extends Component {
  render() {
    return(
      <Navbar bg="light" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <button className="btn" onClick={() => this.props.handleLogout()}>Logout</button>
            <button className="btn" onClick={() => this.props.handleSelection('login')}>Login</button>
            <button className="btn" onClick={() => this.props.handleSelection('registration')}>Register</button>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
