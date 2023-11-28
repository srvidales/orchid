import { memo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DAILY_MENUS_BY_SCHOOL } from '../utils/queries';

// Component to display daily menus
export default memo(function MenuView({ schoolId }) {
  console.log('School ID Given:', schoolId);
  // GraphQL hook to fetch data
  const { data, error } = useQuery(GET_DAILY_MENUS_BY_SCHOOL, {
    variables: { schoolId },
  });

  console.log('#2', data);

  // Extract daily menu data or default to an empty array
  const dailyMenuData = data?.dailyMenusBySchool || [];

  // Group daily menu data by date using a custom utility function
  const MenusByDate = Object.groupBy(dailyMenuData, ({ date }) => {
    // Format the date using .toLocaleDateString()
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  });

  console.log('data from query', MenusByDate);

  // Get an array of keys (dates) from the grouped MenusByDate, filtering out weekends
  const filterWeekdays = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday (1) to Friday (5)
  };

  const weekdayKeysArray = Object.keys(MenusByDate).filter(filterWeekdays);

  // Create a function to format the current week in mm/dd/yy - mm/dd/yy
  const getCurrentWeek = () => {
    const today = new Date();
    
    const startOfWeek = new Date(
      today.setDate(
        today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1),
      ),
    );

    const endOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 5),
    );

    return `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Menu View</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {/* Iterate over each date in the grouped result */}
        {objectKeyArry.map((item) => (
          <div style={{ minWidth: '125px', width: '18%', marginBottom: '20px', padding: '10px', marginRight: '10px' }} className="border" key={item}>
            <div>
              {/* Display the date as a heading */}
              <h2 className="text-center" style={{ fontSize: '1.2em', marginBottom: '10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</h2>
            </div>
            <div>
              {/* Iterate over each day's data for the current date */}
              {result[item].map((dayData, index) => (
                <div key={index} className="text-center">
                  <div style={{ marginBottom: '10px' }}>
                    {/* Display the meal type as a sub-heading */}
                    <h3 style={{ fontSize: '1em', margin: '0' }}>{dayData.meal}</h3>
                    {/* Display the first menu item for the current meal */}
                    <p style={{ fontSize: '0.9em', margin: '0' }}>{dayData.menuItems[0].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
