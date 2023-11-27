import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';

import { GET_SCHOOL_NAMES } from '../utils/queries';

const Menu = () => {
  const { loading, data, error } = useQuery(GET_SCHOOL_NAMES);

  return (
    <div>
      {Auth.loggedIn() ? (
        loading ? (
          <tr>
            <td>Loading...</td>
          </tr>
        ) : (
          <MenuBuilder schoolId={data.schools[0]._id} />
        )
      ) : (
        <MenuView />
      )}
    </div>
  );
};

export default Menu;
