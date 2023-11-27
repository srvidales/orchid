import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView';
import Auth from '../utils/auth';

import AddItem2 from '../components/AddItem2';

const Menu = () => {
  const schoolId = '6563ed8cb2a2e8bdeee5cbc2';

  return (
    <div>
      {Auth.loggedIn() ? <MenuBuilder /> : <MenuView />}
      <AddItem2 />
      {Auth.loggedIn() ? <MenuBuilder schoolId={schoolId} /> : <MenuView />}
    </div>
  );
};

export default Menu;
