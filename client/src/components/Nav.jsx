import React from 'react';
import { Container, Button, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

const links = [
  { title: 'Home', link: '' },
  { title: 'About', link: '/about' },
  { title: 'Menu', link: '/menu' },
  { title: 'Parents', link: '/parents' },
  { title: 'Contact Us', link: '/contact' }
];

const Navbar = () => {
  const isLoggedIn = Auth.loggedIn(); 

  return (
    <>
      <BSNavbar
        expand="lg"
        sticky="top"
        className="navbar"
        bg="light"
        data-bs-theme="light"
        fixed="top"
      >
        <Container>
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BSNavbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto align-items-end justify-content-end" style={{ width: '100%' }}>
              {links.map((navlink, i) => (
                <Nav.Link key={i}>
                  <NavLink to={navlink.link} className="nav-link">
                    {navlink.title}
                  </NavLink>
                </Nav.Link>
              ))}
               <Nav.Link>
                <NavLink to="/login" className="nav-link" onClick={isLoggedIn ? Auth.logout : null}>
                  {isLoggedIn ? 'Logout' : 'Login/Sign Up'}
                </NavLink>
              </Nav.Link>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </>
  );
};

export default Navbar;

