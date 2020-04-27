import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="#features">SERVICES</Nav.Link>
        <Nav.Link href="#home">WORK</Nav.Link>
        <Nav.Link href="#features">
          <u>THE TEAM</u>
        </Nav.Link>
      </Nav>
      <i href="#home" className="fa fa-mobile fa-3x icon"></i>{" "}
      {/* <Navbar.Brand href="#">SERVICES</Navbar.Brand> */}
    </Navbar>
  );
}

export default Navigation;
