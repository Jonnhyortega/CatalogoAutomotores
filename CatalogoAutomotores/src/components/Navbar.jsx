import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import "./Navbar.css";
// import '../scss/styles.scss';

const MyNavbar = () => {
  return (
    <Navbar className='navbarCustom' bg="dark" variant="dark" expand="lg" fixed='top'>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navLink" href="#home">Catalogo Automotores LMD 
            </Nav.Link>
            <NavDropdown title="Stock" id="basic-nav-dropdown">
              <NavDropdown.Item href="#corsa">Corsa Clasic 2016</NavDropdown.Item>
              <NavDropdown.Item href="#clio">Clio Campus 2013</NavDropdown.Item>
              <NavDropdown.Item href="#prisma">Prisma Lt 2018</NavDropdown.Item>
              <NavDropdown.Item href="#suran">Suran Confortline 2016</NavDropdown.Item>
              <NavDropdown.Item href="#c4">C4 Lounge</NavDropdown.Item>
              <NavDropdown.Item href="#voyage">Voyage Trendline 2015</NavDropdown.Item>
              <NavDropdown.Item href="#punto">Punto Atractive</NavDropdown.Item>
              <NavDropdown.Item href="#ecoSport">Eco Sport 2012</NavDropdown.Item>
              <NavDropdown.Item href="#focus">Focus SE 2015</NavDropdown.Item>
              <NavDropdown.Item href="#partner">Partner 2016</NavDropdown.Item>
              <NavDropdown.Item href="#model_308">308 2015</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
