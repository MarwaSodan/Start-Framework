import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavbarComponent/NavbarComponent.css';

export default function NavbarComponent({ onLinkClick }) {
  const location = useLocation(); // Get current location
  const [activeLink, setActiveLink] = useState(location.pathname.slice(1) || 'home');

  useEffect(() => {
    setActiveLink(location.pathname.slice(1) || 'home');
  }, [location.pathname]);

  const handleLinkClick = (section, event) => {
    event.preventDefault(); // Prevent default link behavior
    setActiveLink(section); // Set the active link
    onLinkClick(section); // Call the parent's onLinkClick
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="text-light d-flex justify-content-between">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={(event) => handleLinkClick('home', event)}
          className={activeLink === 'home' ? 'active' : ''}
        >
          START REACT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggle">
          <FontAwesomeIcon icon={faBars} className="text-white" />
          <span className="ms-2">Menu</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="ms-auto">
            <Nav.Item>
              <Nav.Link
                href="#portfolio"
                onClick={(event) => handleLinkClick('portfolio', event)}
                className={activeLink === 'portfolio' ? 'active' : ''}
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={(event) => handleLinkClick('about', event)}
                className={activeLink === 'about' ? 'active' : ''}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={(event) => handleLinkClick('contact', event)}
                className={activeLink === 'contact' ? 'active' : ''}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

