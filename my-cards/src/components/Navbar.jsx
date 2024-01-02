import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mynavbar() {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Business Cards App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Mycards">My Cards</Nav.Link>
            <Nav.Link href="#">Favorite Cards</Nav.Link>
          </Nav>

          {user ? (
            // Display user's name and logout button when authenticated
            <Nav>
              <NavDropdown title={`Hello, ${user.name.first}`} id="navbarScrollingDropdown">
                {/* Additional links for authenticated users can be added here */}
                <NavDropdown.Item as={Link} to="./UserInfopage.jsx">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            // Display sign-in options when not authenticated
            <Nav>
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/signin">Sign In</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signupbiz">Sign Up Biz</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
