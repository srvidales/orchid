import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_SCHOOL_NAMES } from '../utils/queries';

const Menu = () => {
  const { loading, data, error } = useQuery(GET_SCHOOL_NAMES);
  console.log('data from Menu:', data);

  return (
    <div>
      {Auth.loggedIn() ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          <p>No schools</p>
        )
      ) : data ? (
        <MenuView schoolId={data?.schools[0]?._id} />
      ) : (
        <p>No schools</p>
      )}
    </div>
  );
};

export default Menu;
