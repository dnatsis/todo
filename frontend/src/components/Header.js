import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">Todo List</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/create">
                <Nav.Link>
                  <i className="fas fa-plus-circle"></i> Create
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/completed">
                <Nav.Link>
                  <i className="fas fa-check-circle"></i> Completed
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search Todo's"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
