import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_SCHOOL_NAMES } from '../utils/queries';

const Menu = () => {
  const { loading, data } = useQuery(GET_SCHOOL_NAMES);
  const schoolData = data?.schools || [];
  // console.log('data from Menu:', schoolData[1]);
  return (
    <div>
      {Auth.loggedIn() ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          <MenuBuilder schoolId={schoolData[1]?._id} />
        )
      ) : data ? (
        <MenuView schoolId={schoolData[1]?._id} />
      ) : (
        <MenuView schoolId={schoolData[1]?._id} />
      )}
    </div>
  );
};

export default Menu;
