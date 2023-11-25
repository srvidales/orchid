import React from 'react';
import { Container, Button, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

const links = [
  { title: 'Home', link: '' },
  { title: 'About', link: '/about' },
  { title: 'Menu', link: '/menu' },
  { title: 'Parents', link: '/parents' },
  { title: 'Contact', link: '/contact' },
];

const Navbar = () => {
  return (
    <>
      <BSNavbar
        expand="lg"
        sticky="top"
        className="navbar"
        style={{
          position: 'fixed',
          zIndex: 10,
          backgroundColor: 'white',
          width: '100%',
          height: 50,
          left: 0,
        }}
        sticky="top"
        expand="md"
      >
        <Container>
          <BSNavbar.Brand>Wicked Whippersnapper Daycare</BSNavbar.Brand>
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BSNavbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto align-items-end justify-content-end">
              {links.map((navlink, i) => (
                <Nav.Link key={i}>
                  <NavLink to={navlink.link} className="nav-link">
                    {navlink.title}
                  </NavLink>
                </Nav.Link>
              ))}
              {!Auth.loggedIn() ? (
                <NavLink to="/login" className="nav-link">
                  <Button>Login/Signup</Button>
                </NavLink>
              ) : (
                <Button onClick={() => Auth.logout()}>LOGOUT</Button>
              )}
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </>
  );
};

export default Navbar;
