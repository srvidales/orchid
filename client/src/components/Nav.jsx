import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';
import navbarLogoImage from '../assets/logo/navbar-logo.png';

const links = [
  { title: 'Home', link: '' },
  { title: 'About', link: '/about' },
  { title: 'Menu', link: '/menu' },
  { title: 'Contact Us', link: '/contact' },
];

const Navbar = () => {
  const isLoggedIn = Auth.loggedIn();

  return (
    <>
      <BSNavbar
        expand="lg"
        sticky="top"
        className="navbar"
        bg="white"
        data-bs-theme="light"
        fixed="top"
      >
        <BSNavbar.Brand>
          <img
            src={navbarLogoImage}
            alt="Navbar Logo"
            style={{ height: '100px', width: '100%', paddingLeft: '18px' }}
          />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav
            className="me-auto align-items-end justify-content-end"
            style={{ width: '100%', paddingRight: '18px' }}
          >
            {links.map((navlink, i) => (
              <NavLink to={navlink.link} className="nav-link">
                {navlink.title === 'Menu' && Auth.loggedIn()
                  ? 'Edit Menu'
                  : navlink.title}
              </NavLink>
            ))}
            <NavLink
              key="login-logout"
              to="/login"
              className="nav-link"
              onClick={isLoggedIn ? Auth.logout : null}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </NavLink>
          </Nav>
        </BSNavbar.Collapse>
      </BSNavbar>
    </>
  );
};

export default Navbar;
