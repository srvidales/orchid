import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../index.css';
import Auth from '../utils/auth';

const Navbar = () => {
  const links = [
    { title: 'Home', link: '' },
    { title: 'About', link: '/about' },
    { title: 'Menu', link: '/menu' },
    { title: 'Parents', link: '/parents' },
    { title: 'Contact Us', link: '/contact' },
  ];

  return (
    <nav className="navbar">
      {links.map((navlink, i) => (
        <NavLink to={navlink.link} key={i}>
          {({ isActive }) => (
            <Button className={isActive ? 'active' : ''}>
              {navlink.title}
            </Button>
          )}
        </NavLink>
      ))}
      {!Auth.loggedIn() ? (
        <NavLink to="/login">
          {({ isActive }) => (
            <Button className={isActive ? 'active' : ''}>Login/Signup</Button>
          )}
        </NavLink>
      ) : (
        <Button onClick={() => Auth.logout()}>LOGOUT</Button>
      )}
    </nav>
  );
};

export default Navbar;
