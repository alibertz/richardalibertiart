import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

export default function MainNavbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="brand" href="/">richard aliberti art</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">portfolio</Nav.Link>
          <Nav.Link href="/">about</Nav.Link>
          <Nav.Link href="/">contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
