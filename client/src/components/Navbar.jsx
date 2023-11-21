import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar"; // Added to handle conditional rendering of AdminNavbar

const Navbar = ({ isLoggedIn }) => {
  // If the user is logged in, render the Admin navbar
  if (isLoggedIn) {
    return <AdminNavbar />;
  }

  // Otherwise, render the regular navbar
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Menu", link: "/menu" },
    { title: "Parents", link: "/parents" },
    { title: "Contact Us", link: "/contact" },
    { title: "Login", link: "/login" },
  ];
  return (
    <nav className="navbar">
      {links.map((navlink) => (
        <NavLink to={navlink.link}>
          {({ isActive }) => (
            <Button className={isActive ? "active" : ""}>
              {navlink.title}
            </Button>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
