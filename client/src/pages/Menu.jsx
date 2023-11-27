import MenuBuilder from "../components/MenuBuilder";
import MenuView from "../components/MenuView";
import Auth from '../utils/auth';

const Menu = () => {
  const schoolId = '6563d10910620315bab19425';

  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder schoolId={schoolId} /> : <MenuView />}
    </div>
  );
};

export default Menu;
