import MenuBuilder from "../components/MenuBuilder";
import MenuView from "../components/MenuView";
import Auth from '../utils/auth';

const Menu = () => {
  const schoolId = '6563ed8cb2a2e8bdeee5cbc2';

  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder schoolId={schoolId} /> : <MenuView />}
    </div>
  );
};

export default Menu;
