import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView';
import Auth from '../utils/auth';

import AddItem2 from '../components/AddItem2';

const Menu = () => {
  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder /> : <MenuView />}
      <AddItem2 />
    </div>
  );
};

export default Menu;
