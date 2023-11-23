import MenuBuilder from "../components/MenuBuilder";
import MenuView from "../components/MenuView";
import Auth from '../utils/auth';

const Menu = () => {
  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder /> : <MenuView />}
    </div>
  );
};

export default Menu;
