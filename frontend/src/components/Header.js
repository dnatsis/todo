import React from 'react';
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
          <Navbar.Brand href="/">Todo List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/create">
                <i className="fas fa-plus-circle"></i> Create
              </Nav.Link>
              <Nav.Link href="/completed">
                <i className="fas fa-check-circle"></i> Completed
              </Nav.Link>
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
