import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



function Header() {


  return (
    <>
      {/* Main Navbar */}
      <Navbar sticky='top' bg="light" expand="lg" className="border-0">
        <Container className="d-flex justify-content-between">
          <Nav className="d-flex align-items-center mx-auto">
            <Nav.Link href="#about" >HOME</Nav.Link>
            <Nav.Link href="#aboutme" >ABOUT</Nav.Link>
            <Nav.Link href="#skills" >SKILLS</Nav.Link>
            <Nav.Link href="#services" >SERVICES</Nav.Link>
            <Nav.Link href="#projects" >PROJECTS</Nav.Link>
            <Nav.Link href="#contact" >CONTACT</Nav.Link>
          </Nav>

          
        </Container>
      </Navbar>

      
    </>
  );
}

export default Header;

