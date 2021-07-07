import React from "react";
import {
  Nav,
  Navbar
} from "react-bootstrap";

export const NavbarComp = () => {
  return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <div class="container">
          <Navbar.Brand href="#home">Smart Monitoring</Navbar.Brand>
        </div>
      </Navbar>
  );
};
