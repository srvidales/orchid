import MenuBuilder from "../components/MenuBuilder";
import MenuView from "../components/MenuView";
import Auth from '../utils/auth';

const Menu = () => {
  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();

  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder /> : <MenuView />}
    </div>
  );
};

export default Menu;
