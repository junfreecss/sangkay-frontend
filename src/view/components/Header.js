import React from 'react';
import AppName from './AppName';
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Form,
  FormControl,
  Button,
  Image
} 
from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (
      <>
        <Navbar bg="primary" expand="lg">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Navbar.Brand href="#home">
            <b className="ml-5 text-white">Sangkay</b>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="mr-3 text-white" href="#profile">
                <Image className="mr-2" height="28" src="http://localhost:3000/image/gon.jpeg" roundedCircle />
                Jun Freecss
              </Nav.Link>
              <Nav.Link className="text-white" href="#home">Home</Nav.Link>
              <Nav.Link className="text-white" href="#message">Message</Nav.Link>

              <NavDropdown className="text-white" title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }

}

export default Header;