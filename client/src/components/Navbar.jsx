import { Button } from 'react-bootstrap'; // Import the Button component from react-bootstrap
import { NavLink } from 'react-router-dom'; // Import the NavLink component from react-router-dom
import '../index.css'; // Import the index.css stylesheet
import Auth from '../utils/auth'; // Import the Auth utility

// Navbar component
const Navbar = () => {
  // Array of navigation links
  const links = [
    { title: 'Home', link: '' }, // Home link with an empty link path
    { title: 'About', link: '/about' }, // About link with '/about' as the link path
    { title: 'Menu', link: '/menu' }, // Menu link with '/menu' as the link path
    { title: 'Parents', link: '/parents' }, // Parents link with '/parents' as the link path
    { title: 'Contact Us', link: '/contact' }, // Contact Us link with '/contact' as the link path
  ];

  // Determines what gets displayed on the browser when the component is rendered.
  return (
    <nav className="navbar">
      {/* Render the navbar */}
      {/* Map through the links array and generate NavLink components */}
      {links.map((navlink, i) => (
        // The 'i' index is being used as a unique identifier for each rendered NavLink component within the mapping process.
        <NavLink to={navlink.link} key={i}>
          {/* Create NavLink components with the link path and a unique key */}
          {({ isActive }) => (
            // Based on isActive state, add 'active' class to Button component
            <Button className={isActive ? 'active' : ''}>
              {/* Render the Button component */}
              {navlink.title} {/* Display the navigation link title */}
            </Button>
          )}
        </NavLink>
      ))}
      {/* Check if user is logged in or not */}
      {!Auth.loggedIn() ? (
        // If user is not logged in, display login/signup button
        <NavLink to="/login">
          {/* Render NavLink component with '/login' as the link path */}
          {({ isActive }) => (
            // Based on isActive state, add 'active' class to Button component
            <Button className={isActive ? 'active' : ''}>
              {/* Render the Button component */}
              {/* Display login/signup as the button text */}
              Login/Signup 
            </Button>
          )}
        </NavLink>
      ) : (
        // If user is logged in, display logout button
        <Button onClick={() => Auth.logout()}>
          {/* Render the Button component with logout functionality */}
          LOGOUT
        </Button>
      )}
    </nav>
  );
};

export default Navbar; // Export the Navbar component 
