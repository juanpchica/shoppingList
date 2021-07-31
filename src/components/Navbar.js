import React from "react";

//External Components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavbarMenu = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>JP</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>TODO</Nav.Link>
          <Nav.Link href='#features'>API</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
