import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        {({ isActive }) => (
          <Button className={isActive ? "active" : ""}>Home</Button>
        )}
      </NavLink>
      <NavLink to="/about">
        {({ isActive }) => (
          <Button className={isActive ? "active" : ""}>About</Button>
        )}
      </NavLink>
      <NavLink to="/menu">
        {({ isActive }) => (
          <Button className={isActive ? "active" : ""}>Menu</Button>
        )}
      </NavLink>
      <NavLink to="/parents">
        {({ isActive }) => (
          <Button className={isActive ? "active" : ""}>Parents</Button>
        )}
      </NavLink>
      <NavLink to="/contact">
        {({ isActive }) => (
          <Button className={isActive ? "active" : ""}>Contact Us</Button>
        )}
      </NavLink>
      <NavLink to="/login">
        {({ isActive }) => (
          <Button className={isActive ? "active" : ""}>Login</Button>
        )}
      </NavLink>
    </nav>
  );
};

export default Navbar;
