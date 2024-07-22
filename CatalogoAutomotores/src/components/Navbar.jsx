import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { stock } from "../Js/autos";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = ({ onCarSelect }) => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para controlar la apertura del menú

  // Handler to stop event propagation and close the menu
  const handleCarSelect = (event, car) => {
    event.stopPropagation(); // Prevents the event from propagating up the DOM
    onCarSelect(car);
    setIsNavOpen(false); // Cierra el menú desplegable
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsNavOpen(!isNavOpen)} // Cambia el estado de apertura
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
          <Nav className="me-auto">
            {stock.map((car, index) => (
              <Nav.Link
                key={index}
                onClick={(event) => handleCarSelect(event, car)}
              >
                {car.version} {car.model}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
