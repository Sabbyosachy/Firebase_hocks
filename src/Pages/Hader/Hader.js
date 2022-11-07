import React from "react";
import "./Hader.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hader = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="navlinks" to="/">
                Home
              </Link>
              <Link className="navlinks" to="/about">
                About
              </Link>
              <Link className="navlinks" to="/produt">
                Product
              </Link>
              <Link className="navlinks" to="/order">
                Order
              </Link>
              <Link className="navlinks" to="/login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Hader;
