import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img src="covid.jpeg" alt="covid-img" width="70" height="40"></img>    Welcome to COVID-19 information</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="dark" expand="lg" ></Navbar>
      <br></br>
    </header>
  );
}

export default Header;
