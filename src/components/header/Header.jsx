import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './header.css';
import Button from 'react-bootstrap/Button';

function Header() {
  let navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">
          <h3 className='header-top'>DeliverFood</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-fontss' href="#features">Home</Nav.Link>
          </Nav>
          <Nav className='nav-btn'>
            <Button onClick={() => { navigate('/signup') }} variant="info">Sign Up</Button>
            <Button onClick={() => { navigate('/login') }} variant="info">Log In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
