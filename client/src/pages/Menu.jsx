// Importing necessary components, authentication utility, and GraphQL-related functions
import MenuBuilder from '../components/MenuBuilder';
import MenuView from '../components/MenuView';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_SCHOOL_NAMES } from '../utils/queries';

// Defining the Menu functional component
const Menu = () => {
  // Using the useQuery hook to fetch school names data
  const { loading, data } = useQuery(GET_SCHOOL_NAMES);
  const schoolData = data?.schools || [];

  // Rendering the component based on authentication status and data availability
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

// Exporting the Menu component 
export default Menu;
