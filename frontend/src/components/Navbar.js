import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="nav"
      style={{ backgroundColor: "#E3FEF7" }}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faChargingStation} /> <b>Portify</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <br />
            <Button
              variant="outline-dark"
              className="ms-auto"
              as={Link}
              to="/nearby"
            >
              Nearby Station
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
