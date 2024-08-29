import React from 'react';
import './Header.css';  // Import CSS here
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';  // Import from react-scroll


function Header() {
  return (
    <header className="header">
      <div className="overlay"></div>
      <Navbar bg="transparent" expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="brand">
            <img src={require('../assets/images/logo.png')} alt="Logo" className="logo-img" />
            <div className="logo-text">
              Tech refurbish<br />
              <span className="yard-text">
                Yard
                <img src={require('../assets/images/logo1.png')} alt="Logo" className="logo-img1" />
                {/* <FaStar className="yard-icon" /> Example icon */}
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* Use ScrollLink from react-scroll for smooth scrolling */}
              <Nav.Link as={ScrollLink} to="home" smooth={true} duration={500}>Home</Nav.Link>
              <Nav.Link as={ScrollLink} to="services" smooth={true} duration={500}>Services</Nav.Link>
              <Nav.Link as={ScrollLink} to="brands" smooth={true} duration={500}>Brands</Nav.Link>
              <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500}>About</Nav.Link>
              <Nav.Link as={ScrollLink} to="nearme" smooth={true} duration={500}>Near Me</Nav.Link>
              {/* <Nav.Link as={ScrollLink} to="branches" smooth={true} duration={500}>Branches</Nav.Link> */}
              <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Ensure image paths are correct */}
      <div className="laptop-container">
        <img src={require('../assets/images/laptop.png')} alt="3D Laptop" className="laptop-img" />
      </div>

      <div className="canvas-image-container">
        <img src={require('../assets/images/canvas1.png')} alt="Canvas Shape" className="canvas-image" />
        <div className="canvas-content">
          <Container fluid>
            <Row className="h-100 justify-content-center align-items-center text-center text-md-left">
              <Col xs={12} md={8} className="text-wrapper">
                <h1>The Best & Most Trusted Laptop Repair Service Center Near You In Bangalore</h1>
                <p><b>Benefits at Refurbish Yard:</b><br />
                   - 6 months service warranty<br />
                   - 12 months spare parts warranty
                </p>
                <a href="#services" className="cta-button">Know The Laptop Repair Price Now</a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default Header;
