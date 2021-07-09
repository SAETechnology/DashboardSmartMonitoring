import React from "react";
import {
  Navbar
} from "react-bootstrap";

export const NavbarComp = () => {
  return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">Smart Monitoring</Navbar.Brand>
        </div>
      </Navbar>
  );
};
