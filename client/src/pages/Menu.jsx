import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView'; // Import the MenuView
import Auth from '../utils/auth'; // Import the Auth utility

const Menu = () => {
  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();

  return (
    <div>
      <h1>Menu</h1>
      {/* Conditionally render MenuBuilder if the user is logged in, otherwise render MenuView */}
      {isLoggedIn ? <MenuBuilder /> : <MenuView />}
    </div>
  );
};

export default Menu;
