import MenuBuilder from "../components/MenuBuilder";
import MenuView from "../components/MenuView";
import Auth from '../utils/auth';

const Menu = () => {
  const schoolId = '6562e72e2b3d100f15c0d140';

  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder schoolId={schoolId} /> : <MenuView />}
    </div>
  );
};

export default Menu;
