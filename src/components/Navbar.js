import React from "react";

//External Components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>JP</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/todo'>
            TODO
          </Nav.Link>
          <Nav.Link as={Link} to='/api'>
            API
          </Nav.Link>
          <Nav.Link as={Link} to='/bank'>
            BANK
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
