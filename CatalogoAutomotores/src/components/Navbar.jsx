import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { stock } from "../Js/autos";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const MyNavbar = ({ onCarSelect }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCarSelect = (event, car) => {
    event.stopPropagation();
    onCarSelect(car);
    setIsNavOpen(false);
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FontAwesomeIcon icon={faCar} style={{ color: 'white'}} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
          <Nav className="me-auto">
            {stock.map((car, index) => (
              <Nav.Link
                key={index}
                onClick={(event) => handleCarSelect(event, car)}
              >
                {car.version}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
