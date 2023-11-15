import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="active">
        Home
      </NavLink>
      <NavLink to="/about" className="active">
        About
      </NavLink>
      <NavLink to="/menu" className="active">
        Menu
      </NavLink>
      <NavLink to="/parents" className="active">
        Parents
      </NavLink>
      <NavLink to="/contact" className="active">
        Contact Us
      </NavLink>
      <NavLink to="/login" className="active">
        Staff Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
