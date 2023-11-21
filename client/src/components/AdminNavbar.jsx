import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
    const adminLinks = [
      { title: "Admin Panel", link: "/admin" },
      { title: "Parent View", link: "/parent" },
      { title: "Logout", link: "/logout" },
    ];
  
    return (
      <nav className="navbar">
        {adminLinks.map((navlink) => (
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
  
  export default AdminNavbar;
  