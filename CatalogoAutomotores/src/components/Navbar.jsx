import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { stock } from "../Js/autos";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = ({ onCarSelect }) => {
  // Handler to stop event propagation
  const handleCarSelect = (event, car) => {
    event.stopPropagation(); // Prevents the event from propagating up the DOM
    onCarSelect(car);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
