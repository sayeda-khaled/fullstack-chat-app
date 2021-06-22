import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/navDropdown';
// import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//   <NavDropdown.Divider />
//   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
// </NavDropdown>

// <Form inline>
//   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//   <Button variant="outline-success">Search</Button>
// </Form>

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
