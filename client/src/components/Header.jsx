// Importing necessary components and hooks from react-router-dom
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

// Importing images
import logoImage from '../assets/logo/logo.png';
import schoolImage from '../assets/images/school.png';

// Creating the Header component without using const
export default function Header() {
  // Getting the current page path using useLocation hook
  const currentPage = useLocation().pathname;

  // Returning the JSX for the Header component
  return (
    <div>
      {/* Navbar component with the current page passed as a prop */}
      {/* <Navbar page={currentPage} /> */}
      <Nav page={currentPage} />

      {/* Container for the images, with flex layout and space around */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        {/* Image 1 with alt text and styling */}
        <img src={logoImage} alt="School Logo" style={{ width: '45%' }} />

        {/* Image 2 with alt text and styling */}
        <img src={schoolImage} alt="School Photo" style={{ width: '45%' }} />
      </div>
      <div>
        {/* Page Divider */}
        <hr
          style={{
            width: '95%',
            margin: '20px auto',
            border: '2px solid black',
          }}
        />
        <br></br>
      </div>
    </div>
  );
}
