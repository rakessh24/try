import React from 'react';
import {Container, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

const Navbarcomp = () => {

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><strong>MEROS</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="roster">Roster</Nav.Link>
            <Nav.Link href="bata">Bata</Nav.Link>
            <Nav.Link href="listbeton">List Beton</Nav.Link>
          </Nav>
          <Form className="d-flex" style={{ width: '300px' }}>
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="LogIn">LogIn</Nav.Link>
            <Nav.Link href="SignUp">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarcomp